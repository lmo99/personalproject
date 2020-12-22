import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../assets/Nav.css';

const Header = ({practitionerList}) => {
    return (
        <div>
            <br></br>
            <h1>Find a therapist that's right for you... </h1>
            <div className="nav">
                <Link to="/"> Home </Link>
                <Link to="/savedprofiles" className="savedProfiles"> 
                    Saved Profiles ({practitionerList.length}) 
                </Link>
            </div>
        </div>
    );
}

export default Header;