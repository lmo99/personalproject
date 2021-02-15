import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Practitioner = (props) => {
    function displayFullProfile(profile) {
        console.log("Display Full Profile")
    }

    // an onClick function that takes in profiles that have been clicked including data, will then use Browser Router to display full profile page
        return(
            <>
            <div className="container">
                <Card style={{ width: '15rem'}}>
                    <Card.Img variant="top" src="http://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898.png" />
                    <Card.Body>
                        <Card.Title>
                            {props.profile.name}
                        </Card.Title>
                        <Card.Text>
                            {props.profile.bio}
                        </Card.Text>
                        <button onClick={() => props.buttonFunction(props.profile)}>{props.buttonText}</button>
                        {props.savedProfiles &&
                    
                            <Link to={`${props.profile.id}`}>
                                <button>Full Profile</button>   
                            </Link>
                        }
                            
                    </Card.Body>
                </Card>    
            </div> 
            </> 
        )
    }
    
export default Practitioner;