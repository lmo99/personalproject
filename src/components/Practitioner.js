import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Practitioner = (props) => {
    console.log(props.data)
        return(
            <div className="container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="http://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898.png" />
                    <Card.Body>
                        <Card.Title>
                            {props.profile.name}
                        </Card.Title>
                        <Card.Text>
                            {props.profile.bio}
                        </Card.Text>
                        <button onClick={() => props.buttonFunction(props.profile)}>{props.buttonText}</button>
                    </Card.Body>
                </Card>    
            </div>  
        )
    }
    
export default Practitioner;

// const Practitioner = (props) => {
//     return(
//         <div>
//             <div className="profile__name">{props.profile.name}</div>
//             <div className="profile__bio">{props.profile.bio}</div>
//             <div className="profile__speciality">{props.profile.profileInfo.speciality}</div>
//             <div className="profile__typeOfSession">{props.profile.profileInfo.typeOfSession}</div>
//             <div className="profile__gender">{props.profile.profileInfo.gender}</div>
//             <div className="profile__ethnicity">{props.profile.profileInfo.ethnicity}</div>

//             <button onClick={() => props.buttonFunction(props.data)}>{props.buttonText}</button>



//         </div>
//     )
    

// }

// export default Practitioner;