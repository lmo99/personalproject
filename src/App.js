import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Filter from './components/Filter';
import Header from './components/Header';
import PractitionerList from './components/PractitionerList';

import data from './models/data.json';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from'react-bootstrap'


const App = () => {

  const [profiles, setProfiles] = useState(data);
  const [practitionerList, setPractitionerList] = useState([]);
  const fullprofilebtn = document.getElementById('fullprofilebtn')
  const [filters, setFilters] = useState({
    typeOfSession: "session_nopreference",
    gender: "gender_nopreference"
  })

 
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

  function filterPractitioners(selectedFilters) {
    setProfiles(
      profiles.filter(profile => 
      profile["profileInfo"]["typeOfSession"] === filters.typeOfSession || 
      profile["profileInfo"]["typeOfSession"] ==="session_nopreference")
    )
    setProfiles(
      profiles.filter(profile => 
      profile["profileInfo"]["gender"] === filters.gender || 
      profile["profileInfo"]["gender"] ==="gender_nopreference")

    )
    
  }


  function fullProfile(profile) {
  
  }

  if (profiles.length === 0){
    return 'No profiles found';
  }
  
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
    <Navbar.Brand exact path="/" >Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link path="#savedprofiles">Saved Profiles</Nav.Link>
        <Nav.Link path="/myprofile">My Profile</Nav.Link>
        <NavDropdown path="/about" id="collasible-nav-dropdown">
        <NavDropdown.Item path="/abouttus">About Us</NavDropdown.Item>
          <NavDropdown.Item path="/contactus">Contact Us</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item path="/tsandcs">Terms and Conditions</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>   
      
        <BrowserRouter>
          <Route exact path="/" render={() => (
          <>
            <Header practitionerList={practitionerList} />
            <Filter filters={filters} setFilters={setFilters} filterPractitioners={filterPractitioners}/>
            <PractitionerList data={profiles} buttonFunction={addProfile} buttonText="Save +"/>
    
          </>
            )} />

         <Route path="/savedprofiles" render={() => (
          <>
            <Header practitionerList={practitionerList} />
            <h3>SAVED PROFILES</h3>
            <PractitionerList data={practitionerList} buttonFunction={removeProfile} buttonText="Remove -" fullprofilebtn={fullProfile} btnText="View Full Profile"/>
          </>
        )} />

         <Route path="/myprofile" render={() => (
          <>
            <Header practitionerList={practitionerList} />
            <h3>WELCOME TO YOUR PROFILE</h3>
          
          </>
        )} />

         <Route path="/contactus" render={() => (
          <>
            <Header practitionerList={practitionerList} />
            <h3>CONTACT US</h3>
            
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

          };

          
export default App;
