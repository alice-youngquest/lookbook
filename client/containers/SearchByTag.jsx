import React from 'react'
import { connect } from 'react-redux'
import { fetchOutfitsByTempAndTag } from '../actions'

const SearchByTag = (props) => {
  return (
    <div>
      <div id="tag">
        <input placeholder="sunny, cloudy, snowy .." onKeyUp={ev => {inputTag(ev, props.dispatch)}}/>
      </div>
      <div id="tagtext">filter by tag</div>
    </div>
  )
}

function inputTag (ev, dispatch) {
  if (ev.keyCode === 13) {
    dispatch(fetchOutfitsByTempAndTag(ev.currentTarget.value.toLowerCase()))
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
