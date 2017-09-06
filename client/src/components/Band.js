import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BandStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
`;

class Band extends Component{
  constructor(){
    super();
    this.state = {
      band: {},
      songs: []
    }
  }

  componentWillMount(){
    this._fetchBandAndSongs();
  }

  _fetchBandAndSongs = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/bands/${id}`)
    this.setState({
      band: res.data.band,
      songs: res.data.songs
    })
  }

  render(){
    return (
      <BandStyles>
        <img src={this.state.band.photo_url} />
        <h1>{this.state.band.name}</h1>
        <h4>Nationality: {this.state.band.nationality}</h4>
        <h3>Songs</h3>
        {this.state.songs.map(song => (
          <div key={song.id}>
            <p>Title: {song.title}</p>
            <p>Album: {song.album}</p>
            {/* <audio controls src={song.preview_url}></audio> */}
          </div>
        ))}
      </BandStyles>
    )
  }
}

export default Band