import React from 'react'
import { connect } from 'react-redux'
import { incLikesAct } from '../actions/incLikesAct'

const OutfitsListItem = (props) => {
  return (
    <div>
      <img className="photoUrl" src={props.photoUrl} alt="outfit-pic" />
      <button onClick={ev => {increaseLikes(ev, props.dispatch, props.id, props.likes)}}>Add Like</button>
      <p>This photo has {props.likes} likes!</p>
    </div>
  )
}

function increaseLikes (ev, dispatch, id, likes) {
  dispatch(incLikesAct(id, parseInt(likes) + 1))
}

const provideDispatch = connect()
const connectedAddWord = provideDispatch(OutfitsListItem)

export default OutfitsListItem
