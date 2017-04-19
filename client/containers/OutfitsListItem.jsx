import React from 'react'
import { connect } from 'react-redux'
import { increaseLikes } from '../actions'

const OutfitsListItem = (props) => {
  return (
    <div>

      <div id="imagesingle">
        <a href={props.photoUrl}>
          <img className="photoUrl" src={props.photoUrl} alt="outfit-pic" />
        </a>
      </div>

      <div id="likebutton">
        <input id="toggle-heart" />
        <button id={props.id} className="heart-button" onClick={ev => {addLike(ev, props.dispatch, props.id, props.likes)}}>❤ {props.likes}</button>
      </div>
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
