module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    'Hashtag',
    {
      // MySQL 에는 Hashtag 테이블 생성
      // id 가 기본적으로 있다
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 한글 저장 및 이모티콘
    }
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
};
