exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('outfits').del()
    .then(function () {
      // Inserts seed entries
      return knex('outfits').insert([
        {
          id: 0,
          t_max: 15,
          t_min: 10,
          likes: 0,
          photo_url: 'http://fashion.ekstrax.com/wp-content/uploads/2015/04/Unboring-Fashion-ideas-from-Tumblr-9.jpg'
        },
        {
          id: 1,
          t_max: 5,
          t_min:0,
          likes: 0,
          photo_url: 'http://2.bp.blogspot.com/-IaK8yXZ4SwM/VO1WqPp7mtI/AAAAAAAACIk/IBlnyGuspHY/s1600/chloe%2Bsuzanna%2Bboots-1.jpg'
        }
      ]);
    });
};
