import React from 'react'

const OutfitsListItem = (props) => {
  return (
    <div>
      <img className="photoUrl" src={props.photoUrl} alt="outfit-pic" />
    </div>  
  )
}

export default OutfitsListItem
