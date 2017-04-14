import React from 'react'

import { listOutfitsByTemp } from '../api'
import OutfitsList from './OutfitsList'

const OutfitsByTemp = React.createClass({
  getInitialState() {
    return { outfits: [] }
  },

  componentDidMount() {
    listOutfitsByTemp((err, outfits) => {
      if (err) return console.log(err)
      this.setState({outfits})
    })
  },

  render () {
    return (
      <div>
        <OutfitsList outfits={this.state.outfits}/>
      </div>
    )
  }
})

export default OutfitsByTemp
