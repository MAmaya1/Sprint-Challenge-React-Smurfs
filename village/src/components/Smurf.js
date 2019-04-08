import React from 'react';

import styled from 'styled-components';

// Styles Components

const StyledSmurf = styled.div`
  font-size: 1.2rem;
`

// Smurf Component

const Smurf = props => {
  return (
    <StyledSmurf>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </StyledSmurf>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

