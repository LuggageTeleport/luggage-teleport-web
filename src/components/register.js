import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signUpUser } from '../aws_cognito';
import createHistory from 'history/createBrowserHistory';
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
            newUser: null
        }
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 8 &&
            this.state.password === this.state.confirmPassword
        );
    }

    signUp() {
        const history = createHistory();
        const { name, phone_number, email, password } = this.state;
        signUpUser(email, name, phone_number, password)
            .then((result) => {
                history.push('/verify');
                localStorage.setItem('User_Email', email)
                console.log(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (
            <div className="bg-image">
                <div align="center" style={{ marginTop: '100px' }}>
                    <h1 style={{ color: 'yellow', marginBottom: '2em' }}>Register your Account</h1>
                    <form>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                onChange={e => this.setState({ name: e.target.value })}
                                placeholder="Your Fullname" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                onChange={e => this.setState({ email: e.target.value })}
                                placeholder="Your Active Email"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                onChange={e => this.setState({ phone_number: e.target.value })}
                                style={{ marginTop: '10px' }}
                                placeholder="Your Phone Number" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                onChange={e => this.setState({ password: e.target.value })}
                                placeholder="Your Password"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                onChange={e => this.setState({ confirmPassword: e.target.value })}
                                placeholder="Confirm your Password"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <button
                            className="btn btn-lg btn-primary"
                            type="submit"
                            disabled={!this.validateForm()}
                            onClick={this.signUp()}
                        >
                            Register
                        </button>

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