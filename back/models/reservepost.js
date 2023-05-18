module.exports = (sequelize, DataTypes) => {
  const Reservepost = sequelize.define(
    'Reservepost',
    {
      // MySQL에는 reserveposts 테이블로 생성됌
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      date: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      reserveDate: {
        type: DataTypes.STRING(50),
        allowNull: true,
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
  Reservepost.associate = (db) => {
    db.Reservepost.hasMany(db.Comment); // Reservepost.addComments, Reservepost.getComments
  };
  return Reservepost;
};
