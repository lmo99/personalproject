import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header';
import data from './models/data.json';
import PractitionerList from './components/PractitionerList'
import logo from './logo.svg';
import './App.css';
  

const App = () => {

  const [profiles, setProfiles] = useState(data);
  const [practitionerList, setPractitionerList] = useState([]);
 
  function addProfile(profile) {
    setPractitionerList(practitionerList => [...practitionerList, profile]);
    const newProfiles = profiles.filter(item => item.id !== profile.id)
    setProfiles(newProfiles);
  }

  function removeProfile(profile) {
    const newPractitionerList = practitionerList.filter(item => item.id !== profile.id)
    setPractitionerList(newPractitionerList);
    setProfiles(profiles => [...profiles, profile]);
  }

  if (profiles.length === 0){
    return 'No profiles found';
  }
  
  return (
    <div>        
      
        <BrowserRouter>
          <Route exact path="/" render={() => (
          <>
            <Header practitionerList={practitionerList} />
            <PractitionerList data={profiles} buttonFunction={addProfile} buttonText="Add +"/>
           
          </>
            )} />

         <Route path="/savedprofiles" render={() => (
          <>
            <Header practitionerList={practitionerList} />
            <h3>SAVED PROFILES</h3>
            <PractitionerList data={practitionerList} buttonFunction={removeProfile} buttonText="Remove -"/>
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
