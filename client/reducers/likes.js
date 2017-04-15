let initialState = [
  {
    id: 0,
    likes: 0,
    photoUrl: 'http://fashion.ekstrax.com/wp-content/uploads/2015/04/Unboring-Fashion-ideas-from-Tumblr-9.jpg'
  },
  {
    id: 1,
    likes: 0,
    photoUrl: 'http://2.bp.blogspot.com/-IaK8yXZ4SwM/VO1WqPp7mtI/AAAAAAAACIk/IBlnyGuspHY/s1600/chloe%2Bsuzanna%2Bboots-1.jpg'
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
