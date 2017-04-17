exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('join').del()
    .then(function () {
      // Inserts seed entries
      return knex('join').insert([
        {
          id: 0,
          tags_id: 3,
          outfits_id: 0
        },
        {
          id: 1,
          tags_id: 2,
          outfits_id: 14
        },
        {
          id: 2,
          tags_id: 3,
          outfits_id: 19
        }
      ]);
    });
};
