import React from 'react'
import { connect } from 'react-redux'
import OutfitsListItem from './OutfitsListItem'

const OutfitsList = (props) => {
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
      outfits: state.likesData
    }
}

const provideCorrectProps = connect(mapStateToProps)
const connectedOutfits = provideCorrectProps(OutfitsList)

export default connectedOutfits
