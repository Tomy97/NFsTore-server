"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("collectionNfts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nft_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "nfts",
          key: "id",
        },
      },
      collection_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "collections",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("collectionNfts");
  },
};
