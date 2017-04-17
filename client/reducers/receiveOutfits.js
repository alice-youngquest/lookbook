function returnOutfits (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_OUTFITS':
      return [
        ...action.outfits
      ]
    case 'RECEIVE_LIKES':
      const newState = [
        ...state
      ]
      newState.map((outfit) => {
        if (outfit.id == action.updatedOutfit.id) {
          outfit.likes = action.updatedOutfit.likes
        }
        return outfit
      })
      return newState

    default:
      return state
  }
}

export default returnOutfits
