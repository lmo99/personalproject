import React from 'react'

const Practitioner = (props) => {
    return(
        <div>
            <div className="profile__name">{props.profile.name}</div>
            <div className="profile__bio">{props.profile.bio}</div>
            <div className="profile__speciality">{props.profile.profileInfo.speciality}</div>
            <div className="profile__typeOfSession">{props.profile.profileInfo.typeOfSession}</div>
            <div className="profile__gender">{props.profile.profileInfo.gender}</div>
            <div className="profile__ethnicity">{props.profile.profileInfo.ethnicity}</div>

            <button onClick={() => props.buttonFunction(props.data)}>{props.buttonText}</button>



        </div>
    )
    

}

export default Practitioner;