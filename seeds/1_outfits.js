
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('outfits').del()
    .then(function () {
      // Inserts seed entries
      return knex('outfits').insert([
        {id: 1, photo_url: 'http://fashion.ekstrax.com/wp-content/uploads/2015/04/Unboring-Fashion-ideas-from-Tumblr-9.jpg', temperature: '10-15'},
        {id: 2, photo_url: 'http://2.bp.blogspot.com/-IaK8yXZ4SwM/VO1WqPp7mtI/AAAAAAAACIk/IBlnyGuspHY/s1600/chloe%2Bsuzanna%2Bboots-1.jpg', temperature: '15-20'}
      ]);
    });
};
