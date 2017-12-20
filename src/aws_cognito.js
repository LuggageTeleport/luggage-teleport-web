import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoIdentityCredentials, WebIdentityCredentials } from 'amazon-cognito-identity-js';
import { userPool, USERPOOL_ID, IDENTITY_POOL_ID } from './config';

import AWS from 'aws-sdk'


export function signUpUser(email, name, phone_number, password) {
    // instantiate a promise so we can work with this async easily
    const p = new Promise((res, rej) => {
        // create an array of attributes that we want
        const attributeList = []
        // create the attribute objects in plain JS for each parameter we want to save publically (aka NOT the password)
        const dataEmail = {
            Name: 'email',
            Value: email
        }
        const dataName = {
            Name: 'name',
            Value: name
        }
        const dataPhoneNumber = {
            Name: 'phone_number',
            Value: phone_number
        }
        // take each attribute object and turn it into a CognitoUserAttribute object
        const attributeEmail = new CognitoUserAttribute(dataEmail)
        const attributeName = new CognitoUserAttribute(dataName)
        const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber)
        // add each CognitoUserAttribute to the attributeList array
        attributeList.push(attributeName, attributePhoneNumber)
        // call the signUp method of our userPool, passing in email+password as the first 2 args (the two that AWS requires)
        // and as the 3rd arg pass in the attributeList array, followed by `null` as the 4th arg
        // finally as the 5th (last) arg, pass in the callback function that has the error or result from AWS
        userPool.signUp(email, password, attributeList, null, (err, res) => {
            if (err) {
                rej(err)
                return
            }
            // resolve the promise with whatever attributes you need
            // in this case, we return an object with only the email attribute because we will save that to localStorage
            return res;
        })
    })
    return p
}


export function verifyUserAccount(email, pin) {
    const p = new Promise((res, rej) => {
        // we create an object to hold our userData that will be used to create our `cognitoUser` object
        // we cannot just use `userPool` to instantiate a `cognitoUser` object, as no user has been signed in yet
        const userData = {
            Username: email,
            Pool: userPool
        }
        // create the `cognitoUser` object
        const cognitoUser = new CognitoUser(userData)
        // call the `confirmRegistration()` function of `cognitoUser` and pass in the verification PIN
        cognitoUser.confirmRegistration(pin, true, (err, result) => {
            if (err) {
                console.log(err);
                rej(err)
                return;
            }
            // if successful, we signout to refresh the cognitoUser (they will have to login again)
            // actually this is not mandatory either, but during testing I discovered that login does not immediately work after verification due to un-refreshed authentication
            // logging in again will get those authentication tokens
            if (result === "SUCCESS") {
                console.log("Successfully verified account!")
                cognitoUser.signOut()
                res()
            } else {
                // if otherwise failure, we reject the promise
                rej("Could not verify account")
            }
        })
    })
    return p
}