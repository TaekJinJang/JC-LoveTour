const express = require('express');
const { Mainpost, Image, Admin, Comment } = require('../models');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

/*
브라우저,사용자는 믿을게 못되기때문에 꼭 백엔드에서 1차적으로 정상적인 접근이 맞는지 확인해주고
2차로 프론트에서 한번 더 확인을 해줘야 함
예를 들면 ? 게시글을 삭제하는 api 가 /post/3/~~~ 라고 쳤을 때 그 사람의 게시글이 아니라면?
아니면 악성으로 아무숫자나 넣어가며 계속해서 송신한다면?? 
이런 경우를 방지하기 위해 요청받을때 postID가 서로 맞는지, 게시글의 주인이 맞는지를 재차 확인 
*/
const TodayTime = () => {
  let date = new Date(); // 현재 날짜 및 시간
  let Year = date.getFullYear(); // 월
  let Month = date.getMonth() + 1; // 월
  let Day = date.getDate(); // 일

  return Year + '-' + Month + '-' + Day;
};

// 게시글을 불러오는 과정에서 postId - 1~10 ,11~20 이런식으로 가져오고싶었는데
// 만약 13번 게시글이 지워졌다면 9개 13,14,15 번 게시글이 지워졌다면 7개밖에 ㅇ못불러오네....
// 다른 방식을 찾는중 결론적으로는 같은 게시글을 불러올수도, 규격에 맞지 않는 량의 게시물을 불러올수도 있음

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      //택진.png
      const ext = path.extname(file.originalname); //확장자 추출(png)
      const basename = path.basename(file.originalname, ext); // 이미지의 이름을 꺼내올 수 있음(택진)

      done(null, basename + '_' + new Date().getTime() + ext);
      //시간을 저장해서 중복된 이름에 오류가 없게 할 수 있음 (택진12831203.png)
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, //20MB 로 제한
});

router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => {
  //POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

router.post(
  '/announce/add',
  isLoggedIn,
  upload.none(),
  async (req, res, next) => {
    // POST /post/announce/add
    try {
      const post = await Mainpost.create({
        title: req.body.title,
        content: req.body.content,
        date: TodayTime(),
        views: 0,
      });
      if (req.body.image) {
        if (Array.isArray(req.body.image)) {
          // 이미지를 여러개 올리면 image: [택진.png, 택진111.png]
          const images = await Promise.all(
            req.body.image.map((image) => Image.create({ src: image }))
          );
          await post.addImages(images);
        } else {
          // 이미지를 하나만 올리면 image: 택진.png
          const image = await Image.create({ src: req.body.image });
          await post.addImages(image);
        }
      }
      const fullPost = await Mainpost.findOne({
        where: { id: post.id },
        include: [{ model: Image }],
      });
      res.status(201).json(fullPost);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

router.get('/announce/posts', async (req, res, next) => {
  // GET /posts
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Mainpost.findAll({
      where,
      //   limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'], // 내림차순
      ],
      include: [
        { model: Image },
        {
          model: Comment, // 댓글 작성자
          attributes: {
            attributes: ['id', 'content', 'name', 'phoneNumber', 'password'],
            order: [['createdAt', 'DESC']],
          },
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
//조회수 증가
router.patch('/announce/:postId/views', async (req, res, next) => {
  // PATCH /post/1/views
  try {
    const post = await Mainpost.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    post.views += 1;
    await post.save();

    res.json({ views: post.views });
  } catch (error) {
    console.error(error);
    next(error);
  }
});
// 게시글 삭제
router.delete('/announce/:postId', isLoggedIn, async (req, res, next) => {
  // DELETE /post/1
  try {
    await Mainpost.destroy({
      where: { id: req.params.postId },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
