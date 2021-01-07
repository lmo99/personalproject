import React from 'react';
import Practitioner from './Practitioner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../assets/Container.css';

const PractitionerList = (props) => {
console.log(props.data)
    return(
        <div className="container">
            {props.data.map(profile =><Card style={{ width: '18rem' }}>
                <Practitioner key={profile.id} profile={profile}buttonFunction={props.buttonFunction}buttonText={props.buttonText}/>
                <Card.Img variant="top" src="http://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898.png" />
                    <Card.Body>
                        <Card.Title>
                            {profile.name}
                        </Card.Title>
                        <Card.Text>
                            {profile.bio}
                        </Card.Text>
                    </Card.Body>
                </Card>)
            }
            

            
        </div>

        
    )
}
export default PractitionerList;