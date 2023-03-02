'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("nfts", [
      {
        name: "Monkey drep",
        image_url: "https://www.cointribune.com/app/uploads/2021/08/boredape1.jpg?nowebp",
        price: 21,
        create_id: 1,
        owner_id: 1,
      },
      {
        name: "Monkey cine",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKuWj59m1NPru7R5jg7LXYbOF_SMju4sO9w&usqp=CAU",
        price: 31,
        create_id: 1,
        owner_id: 1,
      },
      {
        name: "Monkey mutante",
        image_url: "https://www.redusers.com/noticias/wp-content/uploads/2022/01/mutant.jpg",
        price: 42,
        create_id: 1,
        owner_id: 1,
      },
      {
        name: "Monkey king",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcs3LxnS_8vk2SztKQZdD_-ueGuxC5_kNMQ&usqp=CAU",
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
