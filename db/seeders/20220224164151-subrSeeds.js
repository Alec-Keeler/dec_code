'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Subbreaddits', [
     {
       name: 'Questions',
       description: 'For raising questions about raising bread',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Bread Puns',
       description: 'All of your favorite bread jokes here',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'GBBO',
       description: 'For discussion of the world\'s best television show, The Great British Bake Off',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Subbreaddits', null, {});
  }
};
