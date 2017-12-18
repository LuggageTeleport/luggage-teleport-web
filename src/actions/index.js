import { SIGNED_IN } from '../constants';

export function LogUser(email, isLogin) {
    const action = {
        type: SIGNED_IN,
        email,
        isLogin
    }
    return action;
}