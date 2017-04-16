const likesData = (state = [], action) => {
  switch (action.type) {
    case 'INCR_LIKES':
      const newState = [
        ...state,
        {
          id: action.id,
          likes: action.likes
        }
      ]
      console.log();
      return newState

    default:
      return state

  }
}

export default likesData
