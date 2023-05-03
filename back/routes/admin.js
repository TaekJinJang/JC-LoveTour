const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

// 굳이 passport 라이브러리를 사용하는 이유는
// 나중에 네이버나 구글 로그인으로도 연계가 가능하기에 미리 세팅
// 아이디를 받아올땐 bcrypt 라이브러리로 해시화(보안)
router.post('/login', (req, res, next) => {
  //POST /user/login
  console.log('gd');
  passport.authenticate(
    'local', // req,res,next 를 쓸 수 있게 미들웨어 확장
    (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        // 클라이언트 에러
        return res.status(401).send(info.reason);
      }
      return req.login(user, async (loginErr) => {
        if (loginErr) {
          console.error(loginErr);
          return next(loginErr);
        }
        const fullUserWithoutPassword = await User.findOne({
          where: { id: user.id },
          attributes: {
            exclude: ['password'], // 보안을 위해 비밀번호를 제외하고 프론트로 데이터를 보냄
          },
          include: [
            {
              // model에 있는건 post hasMany를 써서 복수형으로 바뀌었기 때문에
              // 프론트에서는 me.Posts가 됌
              model: Post,
              attributes: ['id'],
            },
            {
              model: User,
              as: 'Followings', // as는 그대로 써줌
              attributes: ['id'],
            },
            {
              model: User,
              as: 'Followers', // as는 그대로 써줌
              attributes: ['id'],
            },
          ],
        });
        return res.status(200).json(fullUserWithoutPassword);
      });
    }
  )(req, res, next);
});

module.exports = router;
