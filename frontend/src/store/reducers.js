import { combineReducers } from 'redux';

import productReducer from '../screens/AllProducts/reducer';

const createReducer = (history) =>
    combineReducers({
        product: productReducer,
    });

export default createReducer;
