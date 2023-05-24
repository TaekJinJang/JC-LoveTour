const express = require('express');
const postRouter = require('./routes/post');
const adminRouter = require('./routes/admin');
const cors = require('cors');
const db = require('./models');
const passportConfig = require('./passport');
const app = express(); // 서버
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

// 백에서 프론트로 로그인기능 이후 비밀번호를 통으로 보내주면 해킹에 굉장히 취약하겠죠 ?
// 그래서 쿠키값을 대신 주는거임, 그럼 브라우저는 앞으로 게시글을 쓰던 뭘 하던 비밀번호를 보내는게 아니고
// 쿠키값을 보내서 아이디를 확인함 서버가 가지고 있는게 세션, 브라우저로 보내는게 쿠키
// 근데 세션은 무거워서 아예 다 들고다니진않고 쿠키에다가 세션안에 있는 아이디만 매칭시켜놓고
// 쿠키값을 받았을 때 세션과 비교해서 데이터를 들고옴

dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

// app.get -> 가져오다
// app.post -> 생성하다
// app.put -> 전체 수정 (통째로 덮는게 아니면 잘 안씀)
// app.delete -> 제거
// app.patch -> 부분 수정
// app.options -> 찔러보기 (요청을 보내도 되는지 확인용?)
// app.head -> 헤더만 가져오기 (잘 안씀)

// 꼭 라우터 위쪽에 써줘야함
// 프론트에서 데이터를 받아올 때

// const maria = require('./database/connect/maria'); // db연결
// try {
//   maria.connect();
//   console.log('db 연결 성공');
// } catch (error) {
//   console.log('오류 발생');
//   console.log(error);
// }

if (process.env.NODE_ENV === 'production') {
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan('den'));
}

app.use(express.json()); // json파일을 req.body에 넣어줌
app.use(express.urlencoded({ extended: true })); // form을 submit 했을 때 데이터를 req.body에 넣어줌
app.use('/', express.static(path.join(__dirname, 'uploads'))); //프론트서버로 이미지파일을 같이 보내줌

app.use(
  cors({
    // proxy방식으로 데이터를 넘겨줌 ( cors 문제 해결)
    origin: ['http://localhost:3000', 'jc-lovetour'], // 배포할땐 실제 url만 적어줘야함 안그러면 해킹해달라고 광고하는거임
    credentials: true, // 쿠키 전달
  })
);

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
); // 로그인할 때 브라우저랑 서버랑 같은 정보를 가져야하는데 보안을 위해 쿠키,세션으로 암호화
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('helo express');
});

app.use('/post', postRouter);
app.use('/admin', adminRouter);

app.listen(3005, () => {
  console.log('gdgd~');
});
