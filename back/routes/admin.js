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
    (err, admin, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        // 클라이언트 에러
        return res.status(401).send(info.reason);
      }
      return req.login(admin, async (loginErr) => {
        if (loginErr) {
          console.error(loginErr);
          return next(loginErr);
        }
        const fullAdminWithoutPassword = await Admin.findOne({
          where: { id: admin.id },
          attributes: {
            exclude: ['password'], // 보안을 위해 비밀번호를 제외하고 프론트로 데이터를 보냄
          },
        });

        return res.status(200).json(fullAdminWithoutPassword);
      });
    }
  )(req, res, next);
});

module.exports = router;
