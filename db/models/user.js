'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    faveBread: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, { foreignKey: 'userId', hooks: true, onDelete: 'CASCADE' })
    User.belongsToMany(models.Subbreaddit, {
      through: 'Subscription',
      foreignKey: 'userId',
      otherKey: 'subId'
    })
  };
  return User;
};