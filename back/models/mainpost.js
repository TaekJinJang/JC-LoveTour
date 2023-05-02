module.exports = (sequelize, DataTypes) => {
  const Mainpost = sequelize.define(
    'Mainpost',
    {
      // MySQL에는 mainposts 테이블로 생성됌
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      views: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // 한글 + 이모티콘
      collate: 'utf8mb4_general_ci', // 한글 + 이모티콘 저장
    }
  );
  Mainpost.associate = (db) => {
    //   db.Mainpost.hasMany(db.Comment); // Mainpost.addComments, Mainpost.getComments
    //   db.Mainpost.hasMany(db.Image); // Mainpost.addImages, Mainpost.getImages
  };
  return Mainpost;
};
