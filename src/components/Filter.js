import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Filter = (props) => {
    let typeOfSession = props.filters.typeOfSession

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.filterPractitioners(props.filters);
    };

    return (
        <Form onSubmit={handleSubmit}>
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

             <div key="nopreference">
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

            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Filter;