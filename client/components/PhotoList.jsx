import React from 'react'
import PhotoListItem from './PhotoListItem'
import { listAllOutfits } from '../api'

// const PhotoList = () => {
//   return (
//     <div>
//       <p>PhotoList Test</p>
//       <PhotoListItem />
//     </div>
//   )
// }

export default React.createClass({
  getInitialState () {
    return {
      allOutfits: {
        imageUrl: "https://avatars1.githubusercontent.com/u/23620176?v=3&s=200",
        name: "Kakapo",
        outfits: []
      }
    }
  },

  componentDidMount () {
    listAllOutfits((err, allOutfits) => {
      if (err) return console.log(err)
      this.setState({ allOutfits })
    })
  },

  render () {
    return (
      <div className="Home">
        {this.state.allOutfits.outfits.map((outfit) => {
          return (
          <Status outfit={outfit} key={outfit.id}/>
          )
        })}
        <p>PhotoList Test</p>
        <PhotoListItem />
      </div>
    )
  }
})

// module.exports = PhotoList
