import React, { Component } from 'react';
import WeatherInput from './components/WeatherInput';
import WeatherOutput from './components/WeatherOutput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <WeatherInput />
        <WeatherOutput />
      </div>
    );
  }
}

export default App;
