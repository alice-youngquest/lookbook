function returnOutfits (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_OUTFITS':
      return [
        ...action.outfits
      ]

    default:
      return state
  }
}

export default returnOutfits
