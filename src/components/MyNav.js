import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from'react-bootstrap';

const MyNav = ({practitionerCount}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
        <Link className="navbar-brand" to="/" >Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/myprofile">My Profile</Link>
            <Link className="nav-link" to="/savedprofiles">Saved Profiles ({practitionerCount})</Link>
            <Link className="nav-link" to="/contactus">Contact Us</Link>
            <Link className="nav-link" to="/tsandcs">Terms and Conditions</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav;

