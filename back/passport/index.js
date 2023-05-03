const passport = require('passport');
const local = require('./local');
const { Admin } = require('../models');
module.exports = () => {
  passport.serializeUser((admin, done) => {
    done(null, admin.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const admin = await Admin.findOne({ where: { admin_ID } });
      done(null, admin);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
