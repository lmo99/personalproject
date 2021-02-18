import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/Filter.css';

const Filter = (props) => {
    let typeOfSession = props.filters.typeOfSession
    let gender = props.filters.gender
    let ethnicity = props.filters.ethnicity

    const handleSubmit = (event) => {
        event.preventDefault();
        props.filterPractitioners();
    };

    const handleChecked = (event) => {
        let checkedArray = ethnicity
        const checkedField = event.target.id

        if(checkedArray.includes(checkedField)) {
            checkedArray.splice(checkedArray.indexOf(checkedField), 1)
        } else {
            checkedArray.push(checkedField)
        }
        props.setFilters({...props.filters, ethnicity: checkedArray})
    }
    

    return (
        <Form onSubmit={handleSubmit} >
            <div className="filter">
                <div className="type-of-session">
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
                </div>
                <div className="gender-filter">
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
                </div>

                <div className="ethnicity">
                    <p>ETHNICITY</p>  
                    <div key="ethnicity_black">
                        <Form.Check 
                            type="checkbox"
                            id="ethnicity_black"
                            label="Black"
                            name="ethnicity"
                            checked={ethnicity.includes("ethnicity_black")}
                            onChange={(e) => {handleChecked(e)}}
                        />
                    </div>

                    <div key="ethnicity_white">
                        <Form.Check 
                            type="checkbox"
                            id="ethnicity_white"
                            label="White"
                            name="ethnicity"
                            checked={ethnicity.includes("ethnicity_white")}
                            onChange={(e) => {handleChecked(e)}}
                           
                        />
                    </div>

                    <div key="ethnicity_asian">
                        <Form.Check 
                            type="checkbox"
                            id="ethnicity_asian"
                            label="Asian"
                            name="ethnicity"
                            checked={ethnicity.includes("ethnicity_asian")}
                            onChange={(e) => {handleChecked(e)}}
                        />
                    </div>
                </div>
            </div>
            <div className="filter-button">
                <Button variant="outline-secondary"  type="submit" >
                    Submit
                </Button>
            </div>
        </Form>
        
    )
}

export default Filter;