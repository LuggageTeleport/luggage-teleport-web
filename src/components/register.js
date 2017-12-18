import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Register extends Component {

    constructor(props) {
        super(props);
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
                                placeholder="Your Fullname" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Your Active Email"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                style={{ marginTop: '10px' }}
                                placeholder="Your Phone Number" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Your Password"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <button className="btn btn-lg btn-primary">Register</button>
                        
                        <div style={{marginTop: '3em'}}>
                            <p><strong>Already Have an Account?</strong><Link to="/login"> <a style={{color: 'white'}}>Sign In</a></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;