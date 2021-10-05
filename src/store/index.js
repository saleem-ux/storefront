import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { catProdReducer } from '../reducer/category-reducer';
import { productReducer } from '../reducer/product-reducer';
//1-  combine reducers in one reducer 
const reducers = combineReducers({ cat: catProdReducer, prod: productReducer });
// 2- createStore 3-export store 
export const store = createStore(reducers, composeWithDevTools());
