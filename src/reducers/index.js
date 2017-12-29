import { combineReducers } from 'redux'
import user from './reducer_user';
import BookData from './reducer_book_data';
import payment from './reducer_payment';

export default combineReducers({
    user,
    BookData,
    payment
})