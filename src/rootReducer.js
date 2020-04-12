import {combineReducers} from 'redux';
import user from "./reducers/user";
import books from "./reducers/books";

//take stage return stage
export default combineReducers({
    user,
    books
}); 