// 기본제공 코드를 다 지우고 새로 만듦

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Video = require('./video')(sequelize, Sequelize);
db.Mainpost = require('./mainpost')(sequelize, Sequelize);
db.Reviewpost = require('./reviewpost')(sequelize, Sequelize);
db.Admin = require('./admin')(sequelize, Sequelize);
db.Gallery = require('./gallery')(sequelize, Sequelize);

//models폴더 안 js들의 associate를 반복문돌면서 다 실행시켜줌
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
