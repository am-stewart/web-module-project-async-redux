import React from 'react';
import './App.css';
import Quote from './components/Quote'

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1><span className="emoji">🎵</span> Sayings for the Swifites <span className="emoji">🎵</span></h1>
      </div>
      <div className="quote-box">
        <Quote/>
      </div>
    </div>
  );
}

export default App;