module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      // MySQL에는 images 테이블로 생성됌
      src: {
        type: DataTypes.STRING(200),
        allowNull: false, // 필수
      },
      captionTitle: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      captionContent: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      charset: 'utf8', // 한글
      collate: 'utf8_general_ci', // 한글 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Mainpost); // Image.MainpostId
    db.Image.belongsTo(db.Gallery); // Image.GalleryId
  };
  return Image;
};
