'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nft_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      buyer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      bidder_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions')
  },
}
