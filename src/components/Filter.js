import React from 'react';
import Form from 'react-bootstrap/Form';

const Filter = (props) => {
    return (
        <Form>
            <Form.Group controlId="formSession">
            <div name="typeOfSession" key="online" className="mb-3">
                <Form.Check 
                    type="radio"
                    id="online"
                    label="Online"
                    onChange={(e) =>{props.setFilters(e.target.value)}} 
                />
            </div>

            <div name="typeOfSession" key="inperson" className="mb-3">
                <Form.Check 
                    type="radio"
                    id="inperson"
                    label="In Person"
                />
            </div>
            </Form.Group>
        </Form>
    )
}

export default Filter;