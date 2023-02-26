'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("nfts", [
      {
        name: "Monkey drep",
        link: "https://www.cointribune.com/app/uploads/2021/08/boredape1.jpg?nowebp",
        price: 21,
        create_id: 1,
        owner_id: 1,
      },
      {
        name: "Monkey cine",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKuWj59m1NPru7R5jg7LXYbOF_SMju4sO9w&usqp=CAU",
        price: 31,
        create_id: 1,
        owner_id: 1,
      },
      {
        name: "Monkey mutante",
        link: "https://www.redusers.com/noticias/wp-content/uploads/2022/01/mutant.jpg",
        price: 42,
        create_id: 1,
        owner_id: 1,
      },
      {
        name: "Monkey king",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcs3LxnS_8vk2SztKQZdD_-ueGuxC5_kNMQ&usqp=CAU",
        price: 54,
        create_id: 1,
        owner_id: 1,
      },
    ]);
  },


  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('nfts', null, {});
  }
};
