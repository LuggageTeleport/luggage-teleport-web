import { combineReducers } from 'redux'
import user from './reducer_user';
import BookData from './reducer_book_data';

export default combineReducers({
    user,
    BookData
})