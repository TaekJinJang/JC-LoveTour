module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      // MySQL에는 admins 테이블로 생성됌
      admin_ID: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수라는 뜻
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수라는 뜻
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, // 필수라는 뜻
      },
    },
    {
      charset: 'utf8', // 이걸 해줘야 한글 쓸 수 있음,
      collate: 'utf8_general_ci', // 이걸 해줘야 한글 쓸 수 있음,
    }
  );
  Admin.associate = (db) => {};
  return Admin;
};
