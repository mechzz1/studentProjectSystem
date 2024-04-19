'use strict';
var bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Mubashir',
      lastName: 'Asaad',
      email: 'admin@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      password: bcrypt.hashSync('asdasd', 8)
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};