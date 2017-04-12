
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('join').del()
    .then(function () {
      // Inserts seed entries
      return knex('join').insert([
        {id: 1, tags_id: '1', outfits_id: '1'},
        {id: 2, tags_id: '4', outfits_id: '2'},
        {id: 3, tags_id: '2', outfits_id: '2'}
      ]);
    });
};
