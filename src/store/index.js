import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './slices/categorySlice';
import productReducer from './slices/productSlice';
import accountReducer from './slices/accountSlice';
import authReducer from './slices/authSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        account: accountReducer,
        auth: authReducer,
        search: searchReducer,
    },
});
