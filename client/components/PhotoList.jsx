import React from 'react'
import PhotoListItem from './PhotoListItem'
import { listAllOutfits } from '../api'

const PhotoList = () => {
  getInitialState () {
    return {
      team: {
        imageUrl: "https://avatars1.githubusercontent.com/u/23620176?v=3&s=200",
        name: "Kakapo",
        teamMembers: []
      }
    }
  },

  componentDidMount () {
    listAllOutfits((err, outfits) => {
      if (err) return console.log(err)
      this.setState({ outfits })
    })
  },

  render () {
    return (
      <div className="Home">
        {this.state.outfits.teamMembers.map((teamMember) => {
          return (
          <Status teamMember={teamMember} key={teamMember.id}/>
          )
        })}
      </div>
    )
  }
  return (
    <div>
      <p>PhotoList Test</p>
      <PhotoListItem />
    </div>
  )
}

export default PhotoList
