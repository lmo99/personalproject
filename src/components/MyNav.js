import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from'react-bootstrap';

const MyNav = ({practitionerCount}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
        <Navbar.Brand href="/" >Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/savedprofiles">Saved Profiles ({practitionerCount})</Nav.Link>
            <Nav.Link href="/myprofile">My Profile</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href="/tsandcs">Terms and Conditions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

// <Link to="/savedprofiles" className="savedProfiles"> 
// Saved Profiles ({practitionerList.length}) 
// </Link>

export default MyNav;

