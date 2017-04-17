const returnLikes = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_LIKES':
      // const newState = [
      //   ...state,
      //   {
      //     id: action.id,
      //     likes: action.likes
      //   }
      // ]
      const newState = [
        ...action.outfits
      ]
      return newState

    default:
      return state
  }
}

export default returnLikes
