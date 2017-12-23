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
        history.push('/verify');
    }

    handleChange(attr, event){
		this.setState({
			[attr]: event.target.value
		})
	}

    handleSubmit(e){
        const history = createHistory();
        this.signUp();
        e.preventDefault();
        e.target.reset()
    }


    render() {
        return (
            <div className="bg-image">
                <div align="center" style={{ marginTop: '100px' }}>
                    <h1 style={{ color: 'yellow', marginBottom: '2em' }}>Register your Account</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this, 'name')}
                                placeholder="Your Fullname" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this, 'email')}
                                placeholder="Your Active Email"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                value={this.state.phone_number}
                                onChange={this.handleChange.bind(this, 'phone_number')}
                                style={{ marginTop: '10px' }}
                                placeholder="Your Phone Number" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange.bind(this, 'password')}
                                placeholder="Your Password"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange.bind(this, 'confirmPassword')}
                                placeholder="Confirm your Password"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <button
                            className="btn btn-lg btn-primary"
                            type="submit"
                            disabled={!this.validateForm()}
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