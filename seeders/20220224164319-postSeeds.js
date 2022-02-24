'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Posts', [
     {
       title: 'What bread is best?',
       content: 'Hot take: Garlic bread is best',
       userId: 1,
       subId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       title: 'I liked sourdough before it was cool',
       content: 'Pandemic sourdough hipsters aint got nothin on me',
       userId: 2,
       subId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       title: 'Test post 1',
       content: 'TEST',
       userId: 2,
       subId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       title: 'Test post 2',
       content: 'TEST',
       userId: 2,
       subId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       title: 'Test post 3',
       content: 'TEST',
       userId: 3,
       subId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       title: 'Test post 4',
       content: 'TEST',
       userId: 3,
       subId: 3,
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
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
