import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {
 productListReducer
 } from './reducers/productReducer';
 import {
 cartReducer
 } from './reducers/cartReducers';
 import auth from './reducers/auth';
 import {
    orderCreateReducer,
} from './reducers/orderReducers';


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const reducer = combineReducers({
    productList : productListReducer,
    auth,
    cart : cartReducer,
    orderCreate: orderCreateReducer,
})

const initialState = {
cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    };

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
