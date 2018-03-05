import React, { Component } from 'react';
import Timeline from './timeline/timeline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Timeline startYear={2010} endYear={2018}/>
      </div>
    );
  }
}

export default App;
