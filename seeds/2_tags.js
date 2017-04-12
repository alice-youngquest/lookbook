
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: 1, tag: 'sunny'},
        {id: 2, tag: 'cloudy'},
        {id: 3, tag: 'rainy'},
        {id: 4, tag: 'snowy'}
      ]);
    });
};
