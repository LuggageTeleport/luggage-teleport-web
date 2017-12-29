import { SIGNED_IN, PASSING_BOOK_DATA, GET_PAYMENT_METHOD } from '../constants';

export function LogUser(Email, PhoneNumber) {
    const action = {
        type: SIGNED_IN,
        Email,
        PhoneNumber
    }
    return action;
}

export function PassBookData(BookData) {
    const action = {
        type: PASSING_BOOK_DATA,
        BookData
    }

    return action;
}

export function GetPaymentMethod(PaymentMethod) {
    const action = {
        type: GET_PAYMENT_METHOD,
        PaymentMethod
    }
    return action;
}