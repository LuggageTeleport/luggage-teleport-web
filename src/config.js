// export default {
//     cognito: {
//       REGION: "us-west-2",
//       USER_POOL_ID: "us-west-2_FLoshMhAR",
//       APP_CLIENT_ID: "3cda4n7do7f9ou5gqerhue73ro",
//     }
//   };

import { CognitoUserPool } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk'


const REGION = "us-west-2"
export const USER_POOL_ID = 'us-west-2_FLoshMhAR'
export const CLIENT_ID = '3cda4n7do7f9ou5gqerhue73ro'

AWS.config.update({
  region: REGION
})
const userData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID
}

export const userPool = new CognitoUserPool(userData);
export const USERPOOL_ID = 'cognito-idp.' + REGION + '.amazonaws.com/' + USER_POOL_ID
export const IDENTITY_POOL_ID = 'us-west-2:6c63b00c-1f66-490d-aece-1608a5ca0c58'

//export const SQUARE_APP_ID = 'sq0idp-y9p5NJKdNBy42Q42urg7Tw'; // Production
export const SQUARE_APP_ID = 'sandbox-sq0idp-y9p5NJKdNBy42Q42urg7Tw'; // Sandbox