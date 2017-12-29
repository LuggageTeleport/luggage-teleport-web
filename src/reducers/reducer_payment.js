import { GET_PAYMENT_METHOD } from '../constants';

let payment = {
    PaymentMethod: null
}

export default (state = payment, action) => {
    switch (action.type) {
        case GET_PAYMENT_METHOD:
            const { PaymentMethod } = action;
            payment = {
                PaymentMethod
            }
            return payment;
        default:
            return state;
    }
}