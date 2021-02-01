import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Filter = (props) => {
    let typeOfSession = props.filters.typeOfSession
    let gender = props.filters.gender

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.filterPractitioners();
    };

    return (
        <Form onSubmit={handleSubmit} >
            <p>TYPE OF SESSION</p>
            <div key="online">
                <Form.Check 
                    type="radio"
                    id="online"
                    label="Online"
                    name="typeOfSession"
                    checked={typeOfSession === "online"}
                    onChange={(e) =>
                        {props.setFilters({...props.filters, typeOfSession: e.target.id})}
                    }

                />
            </div>

            <div key="inperson">
                <Form.Check 
                    type="radio"
                    id="inperson"
                    label="In Person"
                    name="typeOfSession"
                    checked={typeOfSession === "inperson"}
                    onChange={(e) =>
                        {props.setFilters({...props.filters, typeOfSession: e.target.id})}
                    }
                />
            </div>

             <div key="session_nopreference">
                <Form.Check 
                    type="radio"
                    id="session_nopreference"
                    label="No Preference"
                    name="typeOfSession"
                    checked={typeOfSession === "session_nopreference"}
                    onChange={(e) =>
                        {props.setFilters({...props.filters, typeOfSession: e.target.id})}
                    }
                />
            </div>
            <br></br>
            <p>GENDER</p>            
            <div key="male">
                <Form.Check 
                    type="radio"
                    id="male"
                    label="Male"
                    name="gender"
                    checked={gender === "male"}
                    onChange={(e) =>
                        {props.setFilters({...props.filters, gender: e.target.id})}
                    }

                />
            </div>

            <div key="female">
                <Form.Check 
                    type="radio"
                    id="female"
                    label="Female"
                    name="gender"
                    checked={gender === "female"}
                    onChange={(e) =>
                        {props.setFilters({...props.filters, gender: e.target.id})}
                    }
                />
            </div>

             <div key="gender_nopreference">
                <Form.Check 
                    type="radio"
                    id="gender_nopreference"
                    label="No Preference"
                    name="gender"
                    checked={gender === "gender_nopreference"}
                    onChange={(e) =>
                        {props.setFilters({...props.filters, gender: e.target.id})}
                    }
                />
            </div>

            <Button variant="outline-secondary"  type="submit" >
                Submit
            </Button>
        </Form>

    )
}

export default Filter;