import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoIdentityCredentials, WebIdentityCredentials } from 'amazon-cognito-identity-js';
import { USER_POOL_ID, CLIENT_ID } from './config';

import AWS from 'aws-sdk'


export function getUserToken(currentUser) {
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
  
 export function getCurrentUser() {
    const userPool = new CognitoUserPool({
      UserPoolId: USER_POOL_ID,
      ClientId: CLIENT_ID
    });
    return userPool.getCurrentUser();
  }