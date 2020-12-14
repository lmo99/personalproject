import React from 'react';
import Practitioner from './Practitioner';

const PractitionerList = (props) => {
    return(
        <div>
            {props.data.map(profile =><Practitioner key={profile.name}
            profile={profile}/>)}
        </div>
    )
}
export default PractitionerList;