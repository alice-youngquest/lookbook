import React from 'react'
import { connect } from 'react-redux'
import { increaseLikes } from '../actions'

const OutfitsListItem = (props) => {
  return (
    <div>
      <a href={props.photoUrl}>
        <img className="photoUrl" src={props.photoUrl} alt="outfit-pic" />
      </a><br/>
      <button id={props.id} onClick={ev => {addLike(ev, props.dispatch, props.id, props.likes)}}>Add Like</button>
      <p>Like count: {props.likes}</p>
    </div>
  )
}

function addLike (ev, dispatch, id, likes) {
  dispatch(increaseLikes(id, likes))
  disableLikeButton(id)
}

function disableLikeButton (id) {
  document.getElementById(id).disabled = true
}

export default connect()(OutfitsListItem)
