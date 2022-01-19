import React from 'react';
import './App.css';
import Quote from './components/Quote'

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>🎶  Quotes for the Swifites 🎶 </h1>
      </div>
      <div className="quote-box">
        <Quote/>
      </div>
    </div>
  );
}

export default App;