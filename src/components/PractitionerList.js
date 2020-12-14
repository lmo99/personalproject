import React from 'react';
import { Card } from 'react-bootstrap';
import Practitioner from './Practitioner';

const PractitionerList = (props) => {

    return(
        <div>
            {props.data.map(profile =><Practitioner key={profile.id}
            profile={profile}/>) }
        </div>

        
    )
}
export default PractitionerList;