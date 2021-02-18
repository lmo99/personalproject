import React, { useState } from 'react';
import {BrowserRouter, Route, useParams, Switch} from 'react-router-dom';

import Filter from './components/Filter';
import Header from './components/Header';
import PractitionerList from './components/PractitionerList';
import MyNav from './components/MyNav';
import FullPracProfile from './components/FullPracProfile';

import data from './models/data.json';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  
  const initialProfileData = data
  const [profiles, setProfiles] = useState(initialProfileData);
  const [savedList, setSavedList] = useState([]);
  const [filters, setFilters] = useState({
    typeOfSession: "session_nopreference",
    gender: "gender_nopreference",
    ethnicity: []
  })

 
  function addProfile(profile) {
    setSavedList(savedList => [...savedList, profile]);
    const newProfiles = profiles.filter(item => item.id !== profile.id)
    setProfiles(newProfiles);
  }

  function removeProfile(profile) {
    const newSavedList = savedList.filter(item => item.id !== profile.id)
    setSavedList(newSavedList);
    setProfiles(profiles => [...profiles, profile]);
  }

  function filterPractitioners() {
    setProfiles(
      initialProfileData.filter(profile => 
        (profile["profileInfo"]["typeOfSession"] === filters.typeOfSession || 
        profile["profileInfo"]["typeOfSession"] === "session_nopreference" ||
        filters.typeOfSession === "session_nopreference") &&
        (profile["profileInfo"]["gender"] === filters.gender || 
        filters.gender === "gender_nopreference") &&
        (filters.ethnicity.includes(profile["profileInfo"]["ethnicity"]) || 
        filters.ethnicity.length === 0)
      )
    ) 
  }

  if (profiles.length === 0){
    return 'No profiles found';
  }
  
  function ProfileLookup() {
  
    let { id } = useParams();
    const lookedUpProfile = initialProfileData.filter(profile => profile.id === id)[0]

    return (
      <FullPracProfile profile={lookedUpProfile} />
    )
  }

  return (
    <div className="main">
      <BrowserRouter>
        <MyNav practitionerCount={savedList.length}/>
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <Header />
              <Filter filters={filters} setFilters={setFilters} filterPractitioners={filterPractitioners}/>
              <PractitionerList data={profiles} buttonFunction={addProfile} buttonText="Save +"/>
            </>
          )} />

          
          <Route path="/myprofile" render={() => (
            <>
              <Header />
              <h3>WELCOME TO YOUR PROFILE</h3>
            </>
          )} />

          <Route path="/savedprofiles" render={() => (
            <>
              <Header />
              <h3>SAVED PROFILES</h3>
              <PractitionerList 
                data={savedList} 
                buttonFunction={removeProfile} 
                buttonText="Remove -" 
                savedProfiles={true}/>
            </>
          )} />

          <Route path="/contactus" render={() => (
            <>
              <Header />
              <h3>CONTACT US</h3>  
            </>
          )} />
      
          <Route path="/:id" children={
            <ProfileLookup />
          } />
        </Switch>
      </BrowserRouter>     
    </div>
  )
};
      
export default App;
