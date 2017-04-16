function returnOutfits (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_OUTFITS':
    console.log("<-- That needs to go! ᗒ ͟ʖᗕ")
      return [
        ...action.outfits
      ]

    default:
      return state
  }
}

export default returnOutfits
