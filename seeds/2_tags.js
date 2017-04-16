exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {
          id: 0,
          tag: 'sunny'
        },
        {
          id: 1,
          tag: 'cloudy'
        },
        {
          id: 2,
          tag: 'rainy'
        },
        {
          id: 3,
          tag: 'snowy'
        }
      ]);
    });
};
