import React from 'react';
import Practitioner from './Practitioner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Container.css';

const PractitionerList = (props) => {
    return(
        <div className="container">
            {props.data.map(profile =>
                <Practitioner 
                    key={profile.id} 
                    profile={profile} 
                    buttonFunction={props.buttonFunction} 
                    buttonText={props.buttonText}
                    fullprofilebtn={props.btnFunction}
                    btnText={props.btnText}
                />
            )}    
        </div>
    )
}
export default PractitionerList;