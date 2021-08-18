import { combineReducers } from 'redux';
import auth from './auth';
import {
 productListReducer
 } from './productReducer';

export default combineReducers({
    auth,
    productList : productListReducer,

});
