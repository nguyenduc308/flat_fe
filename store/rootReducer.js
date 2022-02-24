import { combineReducers } from "redux";
import work from './work/reducer';
import auth from './auth/reducer';

export default combineReducers({
    work,
    auth,
});