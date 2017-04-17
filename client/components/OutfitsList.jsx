import React from 'react'
import { connect } from 'react-redux'
import OutfitsListItem from './OutfitsListItem'
import fetchOutfits from '../actions/fetchOutfits'

const OutfitsList = (props) => {
   console.log('Hits OutfitsList')
  props.dispatch(fetchOutfits('all_outfits'))

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

function mapStateToProps(state) {
    return {
      outfits: state.returnOutfits,
      dispatch: state.dispatch
    }
}

const provideCorrectProps = connect(mapStateToProps)
const connectedOutfits = provideCorrectProps(OutfitsList)

export default connectedOutfits
