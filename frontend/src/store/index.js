import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './slices/categorySlice';
import productReducer from './slices/productSlice';
import accountReducer from './slices/accountSlice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        account: accountReducer,
    },
});
