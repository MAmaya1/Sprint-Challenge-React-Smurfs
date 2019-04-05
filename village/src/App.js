import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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
      <div className="App">
        <div className="nav-bar">
          <NavLink to="/">Smurf Village</NavLink>
          <NavLink to="/smurf-form">Add New Smurf</NavLink>
        </div>
        <Route path="/smurf-form" render={() => <SmurfForm addSmurf={this.addSmurf}/>}/> 
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />}/>
      </div>
    );
  }
}

export default App;
