const express = require('express');
const postRouter = require('./routes/post');
const adminRouter = require('./routes/admin');
// app.get -> 가져오다
// app.post -> 생성하다
// app.put -> 전체 수정 (통째로 덮는게 아니면 잘 안씀)
// app.delete -> 제거
// app.patch -> 부분 수정
// app.options -> 찔러보기 (요청을 보내도 되는지 확인용?)
// app.head -> 헤더만 가져오기 (잘 안씀)

// 꼭 라우터 위쪽에 써줘야함
// 프론트에서 데이터를 받아올 때
// app.use(express.json()); // json파일을 req.body에 넣어줌

const app = express(); // 서버

app.get('/', (req, res) => {
  res.send('helo express');
});

app.use('/post', postRouter);
app.use('/admin', adminRouter);

app.listen(3005, () => {
  console.log('gdgd~');
});
