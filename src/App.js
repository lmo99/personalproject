import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import data from './models/data.json';
import PractitionerList from './components/PractitionerList'
import logo from './logo.svg';
import './App.css';
  

function App() {
  return (
    <div>        
      
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
