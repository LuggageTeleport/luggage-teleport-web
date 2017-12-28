import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signUpUser } from '../aws_cognito';
import { USER_POOL_ID, CLIENT_ID } from '../config';

import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoIdentityServiceProvider,
    AuthenticationDetails,
    CognitoUser
} from "amazon-cognito-identity-js";
import '../App.css';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone_number: '',
            password: '',
            confirmPassword: '',
            newUser: null,
            error: {
                message: ''
            },
            isLoading: false
        }
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 8 &&
            this.state.password === this.state.confirmPassword
        );
    }

    signup(name, email, phone_number, password) {
        const userPool = new CognitoUserPool({
            UserPoolId: USER_POOL_ID,
            ClientId: CLIENT_ID
        });
        const attributeList = []
        const dataEmail = {
            Name: 'email',
            Value: email
        }
        const dataName = {
            Name: 'name',
            Value: name
        }
        const dataPhoneNumber = {
            Name: 'phone_number',
            Value: phone_number
        }

        const attributeEmail = new CognitoUserAttribute(dataEmail);
        const attributeName = new CognitoUserAttribute(dataName);
        const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
        attributeList.push(attributeEmail, attributeName, attributePhoneNumber);

        return new Promise((resolve, reject) =>
            userPool.signUp(email, password, attributeList, null, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                // console.log(result)
                this.props.history.push('/verify');
                resolve(result.user);
            })
        );
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true })
        try {
            const newUser = await this.signup(this.state.name, this.state.email, this.state.phone_number, this.state.password);
        } catch (e) {
            this.setState({
                error: e,
                isLoading: false
            })
            alert(this.state.error.message);
        }

    }



    render() {
        const { isLoading } = this.state;
        return (
            <div className="bg-image">
                <div align="center" style={{ marginTop: '100px' }}>
                    <h1 style={{ color: 'yellow', marginBottom: '2em' }}>Register your Account</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                onChange={e => this.setState({ name: e.target.value })}
                                placeholder="Full Name" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                onChange={e => this.setState({ email: e.target.value })}
                                placeholder="Email"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                onChange={e => this.setState({ phone_number: e.target.value })}
                                style={{ marginTop: '10px' }}
                                placeholder="Phone Number" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                onChange={e => this.setState({ password: e.target.value })}
                                placeholder="Password"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                onChange={e => this.setState({ confirmPassword: e.target.value })}
                                placeholder="Confirm Password"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <div>
                            <p><strong>Notes! </strong>
                                <i className="registerNotes">
                                    Password <strong>must</strong> contain Lowercase, Uppercase,
                                    and Special Character
                                    and minimum length of Password is 8 character</i>
                            </p>
                        </div>
                        {
                            !isLoading ?
                                <button
                                    className="btn btn-lg btn-primary"
                                    type="submit"
                                    style={{ width: '160px' }}
                                    disabled={!this.validateForm()}
                                >
                                    Register
                                </button>
                                :
                                <button
                                    className="btn btn-lg btn-primary"
                                    type="submit"
                                    style={{ width: '160px' }}
                                    disabled={true}
                                >
                                    <i className="fa fa-spinner fa-spin"></i> Submitting...
                                </button>
                        }



                        <div style={{ marginTop: '3em' }}>
                            <p><strong>Already Have an Account?</strong><Link to="/login"> <a style={{ color: 'white' }}>Sign In</a></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;