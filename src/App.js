import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import data from './models/data.json';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data[0].name}
          <br></br>
          {data[0].bio}
          <br></br>
          <br></br>
          {data[0].profileInfo.speciality}
          <br></br>
          {data[0].profileInfo.gender}
          <br></br>
          {data[0].profileInfo.typeOfSession}
          <br></br>
          {data[0].profileInfo.ethnicity}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add to Bookmarks
        </a>
      </header>
    </div>
  );
}

export default App;
