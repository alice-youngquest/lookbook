import React from 'react'
import { connect } from 'react-redux'
import { filterOutfits } from '../actions'

const SearchByTag = (props) => {
  return (
    <div>
      <div className="tag">
        <input placeholder="sunny, cloudy, snowy .." onKeyUp={ev => {inputTag(ev, props.dispatch)}}/>
      </div>
      <div className="tagtext">filter by tag</div>
    </div>
  )
}

function inputTag (ev, dispatch) {
  if (ev.keyCode === 13) {
    dispatch(filterOutfits({
      tag: ev.currentTarget.value.toLowerCase(),
      temp: document.getElementById("temperature").dataset.temp
    }))
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
