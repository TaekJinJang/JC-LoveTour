module.exports = (sequelize, DataTypes) => {
  const Reviewpost = sequelize.define(
    'Reviewpost',
    {
      // MySQL에는 reviewposts 테이블로 생성됌

      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING(20), // 숫자 20
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // 한글 + 이모티콘
      collate: 'utf8mb4_general_ci', // 한글 + 이모티콘 저장
    }
  );
  Reviewpost.associate = (db) => {
    db.Reviewpost.hasMany(db.Comment); // Reviewpost.addComments, Reviewpost.getComments
    db.Reviewpost.hasMany(db.Image); // Reviewpost.addImages, Reviewpost.getImages
    db.Reviewpost.hasMany(db.Video); // Reviewpost.addVideos, Reviewpost.getVideos
  };
  return Reviewpost;
};
