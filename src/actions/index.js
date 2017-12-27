import { SIGNED_IN } from '../constants';

export function LogUser(Email, PhoneNumber) {
    const action = {
        type: SIGNED_IN,
        Email,
        PhoneNumber
    }
    return action;
}