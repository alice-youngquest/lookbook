import React from 'react'
import { connect } from 'react-redux'

import { fetchOutfits } from '../actions/fetchOutfits'
import OutfitsListItem from './OutfitsListItem'

const OutfitsList = (props) => {

  props.dispatch(fetchOutfits('outfits'))

  return (
    <div>
      <ul>
        {props.outfits.map(function(outfit){
          return (
            <OutfitsListItem key={outfit.id} id={outfit.id} likes={outfit.likes} photoUrl={outfit.photoUrl} dispatch={props.dispatch}/>
          )
        })}
      </ul>
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
