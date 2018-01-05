import { PASSING_BOOK_DATA } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case PASSING_BOOK_DATA:
            const { BookData } = action;
            return BookData;
        default:
            return state;
    }
}