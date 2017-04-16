import React from 'react'
import { connect } from 'react-redux'
import { incrLikes } from '../actions/incrLikes'

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
