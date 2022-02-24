'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Users', [
        {
          name: 'toastmaster',
          faveBread: 'garlic toast',
          email: 'toast@master.net',
          password: 'superstrongpass123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bread Simpson',
          faveBread: 'Sourdough (by far)',
          email: 'bread@aioli.com',
          password: 'hunter12',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'bakeaway123',
          faveBread: 'pizza',
          email: 'ilovebread@stuff.gov',
          password: 'pizzaisbread',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'wut',
          faveBread: null,
          email: 'breadislame@gmail.com',
          password: 'password!',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
