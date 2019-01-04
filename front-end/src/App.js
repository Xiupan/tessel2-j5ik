import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      ledOn: false
    }
  }

  ledOn = () => {
    fetch(`http://10.185.4.176:5000/tessel/led-on`)
      .then((r) => {
        return r.json()
      }).then((data) => {
        console.log(data);
      })
  }

  ledOff = () => {
    fetch(`http://10.185.4.176:5000/tessel/led-off`)
      .then((r) => {
        return r.json()
      }).then((data) => {
        console.log(data);
      })
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.ledOn}>
        Turn the LED On!
      </button>
      <button onClick={this.ledOff}>
        Turn the LED Off!
      </button>
      </div>
    );
  }
}

export default App;
