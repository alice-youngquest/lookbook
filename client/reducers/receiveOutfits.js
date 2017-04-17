function returnOutfits (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_OUTFITS':
      return [
        ...action.outfits
      ]
    case 'RECEIVE_LIKES':
      // const newState = [
      //   ...state,
      //   {
      //     id: action.id,
      //     likes: action.likes
      //   }
      // ]
      console.log(action);

      const newState = [
        ...state
      ].map((outfit) => {
        if (outfit.id == action.updatedOutfit.id) {
          outfit.likes = action.updatedOutfit.likes
        }
        return outfit
      })
      console.log(newState);
      return newState

    default:
      return state
  }
}

export default returnOutfits
