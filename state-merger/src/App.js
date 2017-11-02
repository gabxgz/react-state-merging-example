import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button buttonText='Input 1' />
        <Button buttonText='Input 2' />
        <Button buttonText='Input 3' />
      </div>
    );
  }
}

export default App;
