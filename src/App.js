import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import data from './models/data.json';
import PractitionerList from './components/PractitionerList'
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

        <p>
          {data[1].name}
          <br></br>
          {data[1].bio}
          <br></br>
          <br></br>
          {data[1].profileInfo.speciality}
          <br></br>
          {data[1].profileInfo.gender}
          <br></br>
          {data[1].profileInfo.typeOfSession}
          <br></br>
          {data[1].profileInfo.ethnicity}
        </p>
        </header>
        
      
        <BrowserRouter>
          <Route exact path="/" render={() => (
          <>
            <PractitionerList data={data}/>
           
          </>
            )} />
      
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Add to Bookmarks
            </a>
        </BrowserRouter> 
        </div>
          

  )

          }
export default App;
