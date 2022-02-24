'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    subId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};