import React from 'react'
import { connect } from 'react-redux'
import { incrLikes } from '../actions/incrLikes'

const OutfitsListItem = (props) => {
  return (
    <div>

      <div id="imagesingle">
        <a href={props.photoUrl}>
          <img className="photoUrl" src={props.photoUrl} alt="outfit-pic" />
        </a>
      </div>

      <div id="likebutton">
        <button id={props.id} onClick={ev => {addLike(ev, props.dispatch, props.id, props.likes)}}>Add Like</button>
      </div>

      <div id="likecount">
        <p>Like count: {props.likes}</p>
      </div>

    </div>
  )
}

function addLike (ev, dispatch, id, likes) {
  dispatch(incrLikes(id, parseInt(likes) + 1))
  disableLikeButton(id)
}

function disableLikeButton (id) {
  document.getElementById(id).disabled = true
}

const mapStateToProps = (state) => {
    return {
      outfits: state.likesData,
      dispatch: state.dispatch
    }
}

export default connect(mapStateToProps)(OutfitsListItem)
