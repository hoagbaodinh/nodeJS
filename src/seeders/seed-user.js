'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'abc@gmail.com',
      firstName: 'John',
      lastName: 'Doe',
      address: 'USA', phoneNumber: '123-456-7890',
      gender: '1',
      roleId: 'J1',
      image: 'image',
      positionId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
