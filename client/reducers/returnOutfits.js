function returnOutfits (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_OUTFITS':
      console.log("Hits action ", action.type);
      return [
        ...action.outfits
      ]

    default:
      return state
  }
}

export default returnOutfits
