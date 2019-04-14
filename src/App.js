import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CongressionalDistrict from './CongressionalDistrict/CongressionalDistrict';

class App extends Component {
  render() {
    return (
      <div className="App">
      <svg width="960" height="600">
      <CongressionalDistrict width={960} height={600}/>
      </svg>
      
       
      </div>
    );
  }
}

export default App;
