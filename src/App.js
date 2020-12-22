import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header';
import data from './models/data.json';
import PractitionerList from './components/PractitionerList'
import logo from './logo.svg';
import './App.css';
  

const App = () => {

  const [practitionerList, setPractitionerList] = useState(data);
 
  return (
    <div>        
      
        <BrowserRouter>
          <Route exact path="/" render={() => (
          <>
            <Header practitionerList={practitionerList} />
            <PractitionerList data={data}/>
           
          </>
            )} />

         <Route path="/savedprofiles" render={() => (
          <>
            <Header practitionerList={practitionerList} />
            <h3>SAVED PROFILES</h3>
          </>
        )} />
      
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            </a>
        </BrowserRouter> 
        </div>
          

  )

          }

          
export default App;
