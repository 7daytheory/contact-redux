//All Reducers can be combined in one file but kept separately
import { combineReducers } from "redux";
import contactReducer from './contactReducer';

export default combineReducers({
    //If you had multiple reducers, include all here
    contact: contactReducer
})