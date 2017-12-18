import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogUser } from '../actions';
import '../App.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0
        );
    }

    Login() {
        const { email } = this.state;
        this.props.dispatch(LogUser(email, true));
        this.props.history.push('/');
    }

    render() {
        // console.log('this.props', this.props)
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
                                onChange={e => this.setState({ email: e.target.value })}
                                placeholder="Email or Phone Number" required />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                onChange={e => this.setState({ password: e.target.value })}
                                placeholder="password"
                                style={{ marginTop: '10px' }} required />
                        </div>

                        <button
                            className="btn btn-lg"
                            type="submit"
                            disabled={!this.validateForm()}
                            onClick={() => this.Login()}
                            style={{ color: '#00bfff', backgroundColor: 'white' }}
                        >
                            Login
                            </button>


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

function mapStateToProps(state){
    const{ user } = state;
    return{
        user
    }
}
export default withRouter(connect(mapStateToProps, null)(Login));