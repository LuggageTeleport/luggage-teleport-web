import { SIGNED_IN, PASSING_BOOK_DATA } from '../constants';

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