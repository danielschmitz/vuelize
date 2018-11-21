'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Daniel',
          lastName: 'Schmitz',
          email: 'danieljfa@gmail.com',
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
