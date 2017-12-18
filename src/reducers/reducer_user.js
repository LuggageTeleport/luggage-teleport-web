import { SIGNED_IN } from '../constants';

let user = {
    email: null,
    isLogin: false
}


export default (state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { email, isLogin } = action;

            user = {
                email,
                isLogin
            }
            return user;
        default:
            return state;
    }
}