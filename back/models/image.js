module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      // MySQL 에는 Image 테이블 생성
      // id 가 기본적으로 있다
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글 저장 및 이모티콘
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
