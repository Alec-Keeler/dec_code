'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    subId: DataTypes.INTEGER,
    imgLink: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreigney: 'userId' })
    Post.belongsTo(models.Subbreaddit, { foreignKey: 'subId' })
  };
  return Post;
};