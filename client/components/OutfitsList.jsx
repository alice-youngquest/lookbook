import React from 'react'
import OutfitsListItem from './OutfitsListItem'

const OutfitsList = (props) => {
  return (
    <div>
      <ul>
        {props.outfits.map(function(outfit){
          return (
            <OutfitsListItem key={outfit.outfitId} photoUrl={outfit.photoUrl}/>
          )
        })}
      </ul>
    </div>
  )
}

module.exports = OutfitsList
