module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      // MySQL에는 images 테이블로 생성됌
      src: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      captionTitle: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      captionContent: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      charset: 'utf8', // 한글
      collate: 'utf8_general_ci', // 한글 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Mainpost);
    db.Image.belongsTo(db.Gallery);
  };
  return Image;
};
