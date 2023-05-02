module.exports = (sequelize, DataTypes) => {
  const Gallery = sequelize.define(
    'Gallery',
    {
      // MySQL에는 gallerys 테이블로 생성됌
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // 한글 + 이모티콘
      collate: 'utf8mb4_general_ci', // 한글 + 이모티콘 저장
    }
  );
  Gallery.associate = (db) => {
    db.Gallery.hasMany(db.Comment); // Gallery.addComments, Gallery.getComments
    db.Gallery.hasMany(db.Image); // Gallery.addImages, Gallery.getImages
  };
  return Gallery;
};
