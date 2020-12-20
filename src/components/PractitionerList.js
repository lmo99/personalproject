import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../assets/Container.css';

const PractitionerList = (props) => {
console.log(props.data)
    return(
        <div className="container">
            {props.data.map(profile =><Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                        {profile.name}
                    </Card.Title>
                    <Card.Text>
                        {profile.bio}
                    </Card.Text>
                </Card.Body>
            </Card>)}
            
        </div>

        
    )
}
export default PractitionerList;