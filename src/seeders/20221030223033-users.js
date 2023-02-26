"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        // id: 1,
        user: 'Tomas123',
        name: 'Tomas Pandullo',
        email: 'test@test.com',
        password: '12345567',
        permissions: 'admin',
        avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Frealgallo&psig=AOvVaw20Pmkctpvn9E31HxbJdEaw&ust=1670875112711000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjFroSt8vsCFQAAAAAdAAAAABAE'
        // token: 'asdiabduahsbvduhdbashdb129387123u9hkjnjkad',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
