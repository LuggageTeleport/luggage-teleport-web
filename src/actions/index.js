import { SIGNED_IN } from '../constants';

export function LogUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}