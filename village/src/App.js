import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import styled from 'styled-components';

// Styled Components

const StyledApp = styled.div`
  text-align: center;
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background: #5D9530;
  height: 50px;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  
  a {
    text-decoration: none;
    color: white;

    &:hover {
      transform: scale(1.1);
      transition: all 200ms ease;
    }
  }
`

// App Component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({smurfs: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  addSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res)
        this.setState({smurfs: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <StyledApp>
        <NavBar>
          <NavLink to="/">Smurf Village</NavLink>
          <NavLink to="/smurf-form">Add New Smurf</NavLink>
        </NavBar>
        <Route path="/smurf-form" render={() => <SmurfForm addSmurf={this.addSmurf}/>}/> 
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />}/>
      </StyledApp>
    );
  }
}

export default App;
