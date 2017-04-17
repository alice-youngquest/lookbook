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
          outfits_id: 0
        },
        {
          id: 2,
          tags_id: 1,
          outfits_id: 1
        },
        {
          id: 3,
          tags_id: 2,
          outfits_id: 1
        },
        {
          id: 4,
          tags_id: 0,
          outfits_id: 1
        },
        {
          id: 5,
          tags_id: 1,
          outfits_id: 2
        },
        {
          id: 6,
          tags_id: 0,
          outfits_id: 3
        },
        {
          id: 7,
          tags_id: 0,
          outfits_id: 4
        },
        {
          id: 8,
          tags_id: 0,
          outfits_id: 5
        },
        {
          id: 9,
          tags_id: 1,
          outfits_id: 6
        },
        {
          id: 10,
          tags_id: 1,
          outfits_id: 7
        },
        {
          id: 11,
          tags_id: 0,
          outfits_id: 7
        },
        {
          id: 12,
          tags_id: 0,
          outfits_id: 8
        },
        {
          id: 13,
          tags_id: 2,
          outfits_id: 8
        },
        {
          id: 14,
          tags_id: 0,
          outfits_id: 9
        },
        {
          id: 15,
          tags_id: 1,
          outfits_id: 9
        },
        {
          id: 16,
          tags_id: 2,
          outfits_id: 9
        },
        {
          id: 17,
          tags_id: 1,
          outfits_id: 10
        },
        {
          id: 18,
          tags_id: 2,
          outfits_id: 10
        }
      ]);
    });
};
