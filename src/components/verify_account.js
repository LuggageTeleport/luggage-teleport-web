import React, { Component } from 'react';
import '../App.css';
import { verifyUserAccount } from '../aws_cognito';
import { userPool } from '../config';
import { CognitoUser } from "amazon-cognito-identity-js";
import { withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

class VerifyAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pin: '',
            error:{
                message: ''
            }
        }
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.pin.length >= 6
        );
    }

    confirm(email, pin) {

        const userData = {
            Username: email,
            Pool: userPool
        }
        const cognitoUser = new CognitoUser(userData)
        return new Promise((resolve, reject) =>

            cognitoUser.confirmRegistration(pin, true, function (err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);

            })
        );
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();
        event.target.reset()
        try {
            await this.confirm(this.state.email, this.state.pin);
            this.props.history.push('/login');
            // this.setState({message: ''})
        } catch (e) {
            this.setState({ error: e })
            alert(this.state.error.message);
        }
    }

    render() {
        return (
            <div className="bg-image">
                <div align="center" style={{ marginTop: '100px' }}>

                    <h1 style={{ color: 'yellow', marginBottom: '2em' }}>Verify your Account</h1>
                    <form onSubmit={this.handleConfirmationSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                onChange={e => this.setState({ email: e.target.value })}
                                placeholder="Your Email" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                onChange={e => this.setState({ pin: e.target.value })}
                                placeholder="Your Pin" required />
                        </div>


                        <button
                            className="btn btn-lg btn-primary"
                            type="submit"
                            disabled={!this.validateForm()}
                        >
                            Verify
                        </button>


                    </form>
                </div>
            </div>
        )
    }

}

export default withRouter(VerifyAccount);