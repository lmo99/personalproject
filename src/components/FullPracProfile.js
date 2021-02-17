import React from 'react';
import { Card } from 'react-bootstrap';

const FullPracProfile = (props) => {
            return(
                <div className="container">
                    <Card style={{ width: '20rem'}}>
                    <Card.Img variant="top" src="http://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898.png" /> 
                        <Card.Body>
                            <Card.Title>
                            {props.profile.name}
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer className="chat-link">Click here to start a private chat with this practitioner</Card.Footer>
                    </Card>  
                
                    <div className="full-profile">
                        {props.profile.fullProfile}
                    </div>
                </div>
            )
        }
    
export default FullPracProfile;