import React, { Component } from 'react';
import '../App.css';
import { verifyUserAccount } from '../aws_cognito';
import createHistory from 'history/createBrowserHistory'

class VerifyAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pin: ''
        }
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.pin.length >= 6
        );
    }

    verifyPin(){
        const history = createHistory()
		// if(this.state.email && this.state.pin){
			const { email, pin } = this.state;
			verifyUserAccount(email, pin)
			.then((data)=>{
                console.log(data)
				history.push('/login')
			})
			.catch((err)=>{
				console.log(err)
            })
            history.push('/login')
		// }else{
		// 	console.log('error')
		// }
	}

    render() {
        return (
            <div className="bg-image">
                <div align="center" style={{ marginTop: '100px' }}>
                    <h1 style={{ color: 'yellow', marginBottom: '2em' }}>Verify your Account</h1>
                    <form>
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
                            onClick={this.verifyPin()}
                        >
                            Verify
                        </button>


                    </form>
                </div>
            </div>
        )
    }

}

export default VerifyAccount;