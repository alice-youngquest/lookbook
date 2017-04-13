import React from 'react'

import { listAllOutfits } from '../api'
import OutfitsList from './OutfitsList'

const Outfits = React.createClass({
  getInitialState() {
    return { outfits: [] }
  },

  componentDidMount() {
    listAllOutfits((err, outfits) => {
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

export default Outfits
