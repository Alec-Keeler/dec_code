'use strict';
module.exports = (sequelize, DataTypes) => {
  const Toast = sequelize.define('Toast', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    type: DataTypes.BOOLEAN
  }, {});
  Toast.associate = function(models) {
    // associations can be defined here
  };
  return Toast;
};