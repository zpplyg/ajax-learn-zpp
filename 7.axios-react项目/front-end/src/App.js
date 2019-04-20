import React, { Component } from 'react';
import './App.css';

import AxiosFetch from './AxiosFetch'
class App extends Component {
  render() {
    return (
      <div className="App">
        <AxiosFetch></AxiosFetch>
      </div>
    );
  }
}

export default App;
