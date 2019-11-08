import React, {Component} from 'react';
import {Form, FormGroup,  Input, Button} from 'reactstrap'

class NewUserForm extends Component {
    state = {
        firstName:'',
        lastName: ''
    };

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    render(){

        return (
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <lable>
                    First Name
                </lable>
                <Input required placeholder="First Name" onChange={this.handleFirstNameChange} value={this.state.firstName}>
                </Input>
                <lable>
                    Last Name
                </lable>
                <Input required placeholder="Last Name" onChange={this.handleLastNameChange} value={this.state.lastName}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Button block outline type="submit" color="primary">
                    Create User
                </Button>
            </FormGroup>   
            </Form>
        );
    }

}

export default NewUserForm;