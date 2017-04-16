
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('outfits').del()
    .then(function () {
      // Inserts seed entries
      return knex('outfits').insert([
        {
          id: 0,
          t_max: 8,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/63917/pexels-photo-63917.jpeg'
        },
        {
          id: 1,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/247244/pexels-photo-247244.jpeg'
        },
        {
          id: 2,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/47451/pexels-photo-47451.jpeg'
        },
        {
          id: 3,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/88767/pexels-photo-88767.jpeg'
        },
        {
          id: 4,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/7307/pexels-photo.jpeg'
        },
        {
          id: 5,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg'
        },
        {
          id: 6,
          t_max: 11,
          t_min: 15,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/1702/bow-tie-businessman-fashion-man.jpg'
        },
        {
          id: 7,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/31150/pexels-photo-31150.jpg'
        },
        {
          id: 8,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/62468/pexels-photo-62468.jpeg'
        },
        {
          id: 9,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/16622/pexels-photo.jpg'
        },
        {
          id: 10,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/18894/pexels-photo.jpg'
        },
        {
          id: 11,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/221342/pexels-photo-221342.jpeg'
        },
        {
          id: 12,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/387/man-person-wall-music.jpg'
        },
        {
          id: 13,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/247887/pexels-photo-247887.jpeg'
        },
        {
          id: 14,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg'
        },
        {
          id: 15,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/157622/woman-bench-stand-by-blonde-157622.jpeg'
        },
        {
          id: 16,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/7077/man-people-office-writing.jpg'
        },
        {
          id: 17,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/107868/pexels-photo-107868.jpeg'
        },
        {
          id: 18,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/164262/pexels-photo-164262.jpeg'
        },
        {
          id: 19,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/134068/pexels-photo-134068.jpeg'
        },
        {
          id: 20,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/139466/pexels-photo-139466.jpeg'
        },
        {
          id: 21,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/299345/pexels-photo-299345.jpeg'
        },
        {
          id: 22,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/305555/pexels-photo-305555.jpeg'
        },
        {
          id: 23,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/293029/pexels-photo-293029.jpeg'
        },
        {
          id: 24,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/5108/fashion-man-person-winter.jpeg'
        },
        {
          id: 25,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/337259/pexels-photo-337259.jpeg'
        },
        {
          id: 26,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/281424/pexels-photo-281424.jpeg'
        },
        {
          id: 27,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/61124/pexels-photo-61124.jpeg'
        },
        {
          id: 28,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/92035/pexels-photo-92035.jpeg'
        },
        {
          id: 29,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/128939/pexels-photo-128939.jpeg'
        },
        {
          id: 30,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/24257/pexels-photo-24257.jpg'
        },
        {
          id: 31,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/206470/pexels-photo-206470.jpeg'
        },
        {
          id: 32,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/175696/pexels-photo-175696.jpeg'
        },
        {
          id: 33,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/157907/smile-color-laugh-black-157907.jpeg'
        },
        {
          id: 34,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/116233/pexels-photo-116233.jpeg'
        },
        {
          id: 35,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/247199/pexels-photo-247199.jpeg'
        },
        {
          id: 36,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/48714/pexels-photo-48714.jpeg'
        },
        {
          id: 37,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/217860/pexels-photo-217860.jpeg'
        },
        {
          id: 38,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/157887/sunglasses-white-dress-fashion-model-157887.jpeg'
        },
        {
          id: 39,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/167810/pexels-photo-167810.jpeg'
        },
        {
          id: 40,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/211050/pexels-photo-211050.jpeg'
        },
        {
          id: 41,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/25252/pexels-photo-25252.jpg'
        },
        {
          id: 42,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/24156/pexels-photo-24156.jpg'
        },
        {
          id: 43,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/165226/pexels-photo-165226.jpeg'
        },
        {
          id: 44,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/365373/pexels-photo-365373.jpeg'
        },
        {
          id: 45,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/12967/pexels-photo-12967.jpeg'
        },
        {
          id: 46,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/132738/pexels-photo-132738.jpeg'
        },
        {
          id: 47,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/2887/fashion-man-person-model.jpg'
        },
        {
          id: 48,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/199010/pexels-photo-199010.jpeg'
        },
        {
          id: 49,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/199010/pexels-photo-199010.jpeg'
        },
        {
          id: 50,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/5265/fashion-man-person-shorts.jpg'
        },
        {
          id: 51,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/119610/pexels-photo-119610.jpeg'
        },
        {
          id: 52,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/6623/pexels-photo.jpeg'
        },
        {
          id: 53,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/30889/pexels-photo-30889.jpg'
        },
        {
          id: 54,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/249959/pexels-photo-249959.jpeg'
        },
        {
          id: 55,
          t_max: 20,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/53956/beauty-woman-flowered-hat-cap-53956.jpeg'
        },
        {
          id: 56,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/241285/pexels-photo-241285.jpeg'
        },
        {
          id: 57,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/164891/pexels-photo-164891.jpeg'
        },
        {
          id: 58,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/206504/pexels-photo-206504.jpeg'
        },
        {
          id: 59,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/100583/pexels-photo-100583.jpeg'
        },
        {
          id: 60,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/112589/pexels-photo-112589.jpeg'
        },
        {
          id: 61,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/144328/pexels-photo-144328.jpeg'
        },
        {
          id: 62,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/94705/pexels-photo-94705.jpeg'
        },
        {
          id: 63,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/129868/pexels-photo-129868.jpeg'
        },
        {
          id: 64,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/205850/pexels-photo-205850.jpeg'
        },
        {
          id: 65,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/173367/pexels-photo-173367.jpeg'
        },
        {
          id: 66,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/273037/pexels-photo-273037.jpeg'
        },
        {
          id: 67,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/28092/pexels-photo-28092.jpg'
        },
        {
          id: 68,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/36094/pexels-photo.jpg'
        },
        {
          id: 69,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/332390/pexels-photo-332390.jpeg'
        },
        {
          id: 70,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/318380/pexels-photo-318380.jpeg'
        },
        {
          id: 71,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/134635/pexels-photo-134635.jpeg'
        },
        {
          id: 72,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/247258/pexels-photo-247258.jpeg'
        },
        {
          id: 73,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/63937/pexels-photo-63937.jpeg'
        },
        {
          id: 74,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/24280/pexels-photo-24280.jpg'
        },
        {
          id: 75,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/54200/pexels-photo-54200.jpeg'
        },
        {
          id: 76,
          t_max: 20,
          t_min: 16,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/106236/pexels-photo-106236.jpeg'
        },
        {
          id: 77,
          t_max: 10,
          t_min: -100,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/4320/fashion-person-woman-girl.jpg'
        },
        {
          id: 78,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/112573/pexels-photo-112573.jpeg'
        },
        {
          id: 79,
          t_max: 50,
          t_min: 21,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/235531/pexels-photo-235531.jpeg'
        },
        {
          id: 80,
          t_max: 15,
          t_min: 11,
          likes: 0,
          photo_url: 'https://static.pexels.com/photos/235588/pexels-photo-235588.jpeg'
        }
      ]);
    });
};
