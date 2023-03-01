'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("collectionNfts", [
      {
        collection_id: 1,
        nft_id: 1,
      },
      {
        collection_id: 1,
        nft_id: 2,
      },
      {
        collection_id: 1,
        nft_id: 3,
      },
      {
        collection_id: 1,
        nft_id: 4,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('collectionNfts', null, {});
 }
};
