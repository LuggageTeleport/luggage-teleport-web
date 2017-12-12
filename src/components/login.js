import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="bg-image">
                <div align="center" style={{ marginTop: '100px' }}>
                    <img
                        src="https://www.luggageteleport.com/wp-content/themes/luggage/images/logo.png"
                        style={{ padding: '10px', margin: '20px' }}
                    />
                    <form>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email or Phone Number" />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="password"
                                style={{ marginTop: '10px' }} />
                        </div>
                        <Link to={'/home'}>
                            <button
                                className="btn btn-lg"
                                type="submit"
                                style={{ color: '#00bfff', backgroundColor: 'white' }}
                            >
                                Login
                            </button>
                        </Link>

                        <div style={{ marginTop: '3em' }}>
                            <p><strong>Do not have an Account yet?</strong>
                                <Link to="/register"> <a style={{ color: 'white' }}>Let's Register!</a></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;