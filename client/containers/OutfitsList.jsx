import React from 'react'
import { connect } from 'react-redux'

import OutfitsListItem from './OutfitsListItem'

const OutfitsList = (props) => {

  return (
    <div className="imagebox">
        {props.outfits.map(function(outfit){
          return (
            <OutfitsListItem key={outfit.id} id={outfit.id} likes={outfit.likes} photoUrl={outfit.photoUrl} dispatch={props.dispatch}/>
          )
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      outfits: state.returnOutfits,
      dispatch: state.dispatch
    }
}

export default connect(mapStateToProps)(OutfitsList)
