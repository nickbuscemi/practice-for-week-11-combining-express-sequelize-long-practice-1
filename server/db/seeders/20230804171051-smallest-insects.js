'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Insects', 
    [
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'The smallest member of the butterfly family. It can be recognized by the copper brown and dull blue pattern at the bases of both wings.',
        territory: 'North America, Hawaii, the Middle East',
        fact: 'The tiny butterfly’s wingspan can be as little as 12 millimeters.',
        millimeters: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patu Digua Spider',
        description: 'The smallest spider, found around the Rio Digua river near the El Queremal, Valle del Cauca region of northern Colombia.',
        territory: 'Colombia',
        fact: 'The males grow to be about only a third of a millimeter, smaller than even the head of a pin.',
        millimeters: 0.33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Insects', null, {});
  }
};
