import React, { Component } from 'react';

import Smurf from './Smurf';

import styled from 'styled-components';

// Styled Components

const StyledSmurfs = styled.div`
  background: rgba(136, 204, 255, 0.9);
  height: auto;
  padding: 40px 0;
`

// Smurfs Component

class Smurfs extends Component {
  render() {
    return (
      <StyledSmurfs>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </StyledSmurfs>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
