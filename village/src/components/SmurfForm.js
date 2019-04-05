import React, { Component } from 'react';

import styled from 'styled-components';

// Styled Components

const StyledForm = styled.div`
  background: rgba(136, 204, 255, 0.7);
  height: calc(100vh - 50px);
  padding: 50px 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      padding: 8px;
      margin-bottom: 10px;
      width: 20%;
    }

    button {
      padding: 8px;
      background: #5D9530;
      color: white;
      border: none;
      cursor: pointer;
  
      &:hover {
        border: 1px solid #5D9530;
        background: #88CCFF;
        color: black;
        transform: scale(1.1);
        transition: all 200ms ease;
      }
    }
  }
`

// SmurfForm Component

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledForm>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </StyledForm>
    );
  }
}

export default SmurfForm;
