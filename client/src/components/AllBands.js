import React, { Component } from 'react';
import axios from 'axios';
import BandCard from './BandCard';
import styled from 'styled-components';

const BandListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class AllBands extends Component{
  constructor(){
    super();
    this.state = {
      error: '',
      Bands: []
    }
  }

  componentWillMount(){
    this._fetchBands();
  }

  _fetchBands = async () => {
    try {
      const response = await axios.get('/api/Bands');
      const Bands = response.data;
      this.setState({Bands});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render(){
    if (this.state.error){
      return <h1>{this.state.error.message}</h1>
    }
    return (
      <BandListStyles>
        {this.state.Bands.map((Band) => (
          <BandCard key={Band.id} Band={Band} />
        ))}
      </BandListStyles>
    )
  }
}

export default AllBands;