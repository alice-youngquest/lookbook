import React from 'react'
import { connect } from 'react-redux'
import { fetchOutfitsByTag } from '../actions'

const SearchByTag = (props) => {
  return (
    <div>
      <input placeholder="Enter a tag .." onKeyUp={ev => {inputTag(ev, props.dispatch)}}/>
    </div>
  )
}

function inputTag (ev, dispatch) {
  if (ev.keyCode === 13) {
    dispatch(fetchOutfitsByTag(ev.currentTarget.value.toLowerCase()))
    ev.currentTarget.value = ''
  }
}

const mapStateToProps = (state) => {
    return {
      outfits: state.returnOutfits,
      dispatch: state.dispatch
    }
}

export default connect(mapStateToProps)(SearchByTag)
