import React from "react";
import { withRouter } from 'react-router-dom';
import { LogUser } from '../actions';
import { connect } from 'react-redux';
import { USER_POOL_ID, CLIENT_ID } from '../config';
import { CognitoUserPool } from "amazon-cognito-identity-js";
import AWS from "aws-sdk";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    const currentUser = getCurrentUser();
    console.log(getUserToken(currentUser));
    if(currentUser){
      console.log(getUserToken(currentUser));
    } else {
      console.log(false);
    }
  }

  signOutUser() {
    const currentUser = getCurrentUser();
  
    if (currentUser !== null) {
      currentUser.signOut();
    }
  
    if (AWS.config.credentials) {
      AWS.config.credentials.clearCachedId();
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({});
    }
    this.props.history.push('/')
  }

  RenderLoginButton() {
    return (
      <button
        style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', color: '#115fdd' }}
        onClick={() => this.Login()}>
        <strong>Login</strong>
      </button>
    )
  }

  RenderLogoutButton() {
    return (
      <button
        style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', color: '#115fdd' }}
        onClick={() => this.signOutUser()}>
        <strong>Logout</strong>
      </button>
    )
  }

  Login() {
    this.props.history.push('/login')
  }


  render() {
    const currentUser = getCurrentUser();
    return (
      <nav className="navbar def_nav11 navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="https://www.luggageteleport.com">
            <img
              src="https://www.luggageteleport.com/wp-content/themes/luggage/images/logo.png"
              alt
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" style={{ width: 800 }}>
              <li
                id="menu-item-5"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4 current_page_item menu-item-5"
              >
                <a href="https://www.luggageteleport.com/">Home</a>
              </li>
              <li
                id="menu-item-8"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8"
              >
                <a href="https://www.luggageteleport.com/about-us/">About Us</a>
              </li>
              <li
                id="menu-item-11"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11"
              >
                <a href="https://www.luggageteleport.com/our-services/">
                  Our Services
                </a>
              </li>
              <li
                id="menu-item-14"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
              >
                <a href="https://www.luggageteleport.com/careers-partnerships/">
                  Careers & Partnerships
                </a>
              </li>
              <li
                id="menu-item-17"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"
              >
                <a href="https://www.luggageteleport.com/contact-us/">
                  Contact Us
                </a>
              </li>


              <li
                id="menu-item-17"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"
              >
                {
                  !currentUser ? this.RenderLoginButton() :
                    this.RenderLogoutButton()
                }
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function getUserToken(currentUser) {
  return new Promise((resolve, reject) => {
    if (currentUser === null) {
      return false;
    }
    currentUser.getSession(function(err, session) {
      if (err) {
        reject(err);
        return;
      }
      resolve(session.getIdToken().getJwtToken());
    });
  });
}

function getCurrentUser() {
  const userPool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID
  });
  return userPool.getCurrentUser();
}

function mapsStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default withRouter(connect(mapsStateToProps, null)(Navbar));
