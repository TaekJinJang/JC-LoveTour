const passport = require('passport');
const { Strategy } = require('passport-local');
const { Admin } = require('../models');
const bcrypt = require('bcrypt');
module.exports = () => {
  passport.use(
    new Strategy(
      {
        usernameField: 'admin_ID',
        passwordField: 'password',
      },
      async (admin_ID, password, done) => {
        try {
          const admin = await Admin.findOne({
            where: { admin_ID },
          });
          if (!admin) {
            // 1.서버에러 2.성공 3.클라이언트 에러
            return done(null, false, { reason: '존재하지 않는 사용자입니다!' });
          }
          // const result = await bcrypt.compare(password, admin.password);
          // console.log(await bcrypt.compare(password, admin.password));
          const result = await Admin.findOne({
            where: { password },
          }); // bcrypt 빼줬음
          if (result) {
            return done(null, admin);
          }
          return done(null, false, {
            reason: '비밀번호가 틀렸습니다.',
          });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
