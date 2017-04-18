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
        },
        {
          id: 19,
          tags_id: 2,
          outfits_id: 10
        },
        {
          id: 20,
          tags_id: 0,
          outfits_id: 11
        },
        {
          id: 21,
          tags_id: 0,
          outfits_id: 12
        },
        {
          id: 22,
          tags_id: 1,
          outfits_id: 13
        },
        {
          id: 23,
          tags_id: 2,
          outfits_id: 13
        },
        {
          id: 24,
          tags_id: 3,
          outfits_id: 14
        },
        {
          id: 25,
          tags_id: 0,
          outfits_id: 15
        },
        {
          id: 26,
          tags_id: 1,
          outfits_id: 15
        },
        {
          id: 27,
          tags_id: 1,
          outfits_id: 16
        },
        {
          id: 28,
          tags_id: 1,
          outfits_id: 17
        },
        {
          id: 29,
          tags_id: 0,
          outfits_id: 18
        },
        {
          id: 30,
          tags_id: 2,
          outfits_id: 19
        },
        {
          id: 31,
          tags_id: 3,
          outfits_id: 19
        },
        {
          id: 32,
          tags_id: 1,
          outfits_id: 20
        },
        {
          id: 33,
          tags_id: 3,
          outfits_id: 21
        },
        {
          id: 34,
          tags_id: 1,
          outfits_id: 22
        },
        {
          id: 35,
          tags_id: 3,
          outfits_id: 22
        },
        {
          id: 36,
          tags_id: 1,
          outfits_id: 23
        },
        {
          id: 37,
          tags_id: 3,
          outfits_id: 23
        },
        {
          id: 38,
          tags_id: 3,
          outfits_id: 24
        },
        {
          id: 39,
          tags_id: 1,
          outfits_id: 24
        },
        {
          id: 40,
          tags_id: 2,
          outfits_id: 24
        },
        {
          id: 41,
          tags_id: 3,
          outfits_id: 25
        },
        {
          id: 42,
          tags_id: 1,
          outfits_id: 25
        },
        {
          id: 43,
          tags_id: 2,
          outfits_id: 25
        },
        {
          id: 44,
          tags_id: 1,
          outfits_id: 26
        },
        {
          id: 45,
          tags_id: 2,
          outfits_id: 26
        },
        {
          id: 46,
          tags_id: 3,
          outfits_id: 26
        },
        {
          id: 47,
          tags_id: 1,
          outfits_id: 27
        },
        {
          id: 48,
          tags_id: 2,
          outfits_id: 27
        },
        {
          id: 49,
          tags_id: 3,
          outfits_id: 27
        },
        {
          id: 50,
          tags_id: 1,
          outfits_id: 28
        },
        {
          id: 51,
          tags_id: 3,
          outfits_id: 28
        },
        {
          id: 52,
          tags_id: 0,
          outfits_id: 29
        },
        {
          id: 53,
          tags_id: 0,
          outfits_id: 30
        },
        {
          id: 54,
          tags_id: 1,
          outfits_id: 30
        },
        {
          id: 55,
          tags_id: 0,
          outfits_id: 31
        },
        {
          id: 56,
          tags_id: 1,
          outfits_id: 32
        },
        {
          id: 57,
          tags_id: 0,
          outfits_id: 33
        },
        {
          id: 58,
          tags_id: 1,
          outfits_id: 33
        },
        {
          id: 59,
          tags_id: 1,
          outfits_id: 34
        },
        {
          id: 60,
          tags_id: 2,
          outfits_id: 35
        },
        {
          id: 61,
          tags_id: 0,
          outfits_id: 36
        },
        {
          id: 62,
          tags_id: 1,
          outfits_id: 37
        },
        {
          id: 63,
          tags_id: 0,
          outfits_id: 38
        },
        {
          id: 64,
          tags_id: 0,
          outfits_id: 39
        },
        {
          id: 65,
          tags_id: 1,
          outfits_id: 39
        },
        {
          id: 66,
          tags_id: 1,
          outfits_id: 40
        },
        {
          id: 67,
          tags_id: 1,
          outfits_id: 41
        },
        {
          id: 68,
          tags_id: 0,
          outfits_id: 42
        },
        {
          id: 69,
          tags_id: 0,
          outfits_id: 43
        },
        {
          id: 70,
          tags_id: 1,
          outfits_id: 43
        },
        {
          id: 71,
          tags_id: 1,
          outfits_id: 44
        },
        {
          id: 72,
          tags_id: 2,
          outfits_id: 44
        },
        {
          id: 73,
          tags_id: 1,
          outfits_id: 45
        },
        {
          id: 74,
          tags_id: 1,
          outfits_id: 46
        },
        {
          id: 75,
          tags_id: 1,
          outfits_id: 47
        },
        {
          id: 76,
          tags_id: 0,
          outfits_id: 48
        },
        {
          id: 77,
          tags_id: 1,
          outfits_id: 48
        },
        {
          id: 78,
          tags_id: 1,
          outfits_id: 49
        },
        {
          id: 79,
          tags_id: 0,
          outfits_id: 50
        }
      ]);
    });
};
