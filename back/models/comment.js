module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      // MySQL에는 comments 테이블로 생성됌
      content: {
        type: DataTypes.TEXT, // 제한없이 무제한
        allowNull: false, // 댓글은 필수 아님
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
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.Mainpost);
    db.Comment.belongsTo(db.Reviewpost);
    db.Comment.belongsTo(db.Gallery);
  };
  return Comment;
};
