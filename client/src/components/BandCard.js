import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BandStyles = styled.div`
  width: 30%;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
  }
`;

const BandCard = (props) => {
  const Band = props.Band;
  return (
    <BandStyles>
      <Link to={`/Band/${Band.id}`}>
        <img src={Band.photo_url} alt={Band.name} />
        <h3>{Band.name}</h3>
      </Link>
    </BandStyles>
  );
};

export default BandCard;