const express = require('express');
const { Mainpost } = require('../models');
const router = express.Router();

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

router.post('/announce/add', async (req, res, next) => {
  // POST /post/announce/add
  try {
    const post = await Mainpost.create({
      title: req.body.title,
      content: req.body.content,
      date: TodayTime(),
      views: 0,
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
