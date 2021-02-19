import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const MyProfile = () => {
  return (
    <div className="form">
        <Form>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter a password" />
            <FormText color="muted">
            Ensure your password includes a minimum of 6 characters, an uppercase letter and a number
            </FormText>
        </FormGroup>
        <FormGroup>
        <Label for="examplePasswordTwo">Confirm Password</Label>
            <Input type="password" name="passwordtwo" id="examplePasswordTwo" placeholder="Enter your password again" />
        </FormGroup>
        <FormGroup>
            <Label for="exampleFile">Upload a photo (optional)</Label>
            <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <FormGroup check>
            <Label check>
            <Input type="checkbox" />{' '}
            I have read and agreed to the terms and conditions
            </Label>
            <br></br>
        </FormGroup>
        <Button>Create Account</Button>
        </Form>
    </div>
  );
}

export default MyProfile;