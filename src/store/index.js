import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import category from '../reducer/category-reducer';
import cart from '../reducer/cart-reducer';

let reducers = combineReducers({ category, cart });

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();