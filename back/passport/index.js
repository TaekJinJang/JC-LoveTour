const passport = require('passport');
const local = require('./local');
const { Admin } = require('../models');
module.exports = () => {
  passport.serializeUser((admin, done) => {
    done(null, admin.id);
  });
  passport.deserializeUser(async (id, done) => {
    // 아이디로부터 사용자 정보를 db에서 가져옴
    try {
      const admin = await Admin.findOne({ where: { id } });
      done(null, admin); // req.admin
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
