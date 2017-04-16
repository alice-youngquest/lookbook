let initialState = [
  {
    id: 0,
    likes: 0,
    photoUrl: 'https://static.pexels.com/photos/63917/pexels-photo-63917.jpeg'
  },
  {
    id: 1,
    likes: 0,
    photoUrl: 'https://static.pexels.com/photos/247244/pexels-photo-247244.jpeg'
  },
  {
    id: 2,
    likes: 0,
    photoUrl: 'https://static.pexels.com/photos/47451/pexels-photo-47451.jpeg'
  },
  {
    id: 3,
    likes: 0,
    photoUrl: 'https://static.pexels.com/photos/88767/pexels-photo-88767.jpeg'
  },
  {
    id: 4,
    likes: 0,
    photoUrl: 'https://static.pexels.com/photos/7307/pexels-photo.jpeg'
  },
  {
    id: 5,
    likes: 0,
    photoUrl: 'https://static.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg'
  }
]

const likesData = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_LIKES':
      var newState = [
        ...state,
        {
          id: action.id
        }
      ]
      state[action.id].likes = action.likes
      return newState

    default:
      return state

  }
}

export default likesData
