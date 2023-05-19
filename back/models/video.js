module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    'Video',
    {
      // MySQL에는 videos 테이블로 생성됌
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8', // 한글
      collate: 'utf8_general_ci', // 한글 저장
    }
  );
  Video.associate = (db) => {
    db.Video.belongsTo(db.Mainpost);
    db.Video.belongsTo(db.Reviewpost);
  };
  return Video;
};
