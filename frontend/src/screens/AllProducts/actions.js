import axios from 'axios';

import { FETCH_PRODUCTS, FETCH_PRODUCT } from './constants';

const apiUrl = 'http://localhost:5000/api/products/';

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(apiUrl);
            console.log(response);
            dispatch({
                type: FETCH_PRODUCTS,
                payload: response.data.products,
            });
        } catch (error) {
            console.log(error);
        } finally {
            //do nothing
        }
    };
};

export const fetchProduct = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(apiUrl + { id });
            const product = { ...response.data.product };
            console.log(product);
            dispatch({
                type: FETCH_PRODUCT,
                payload: product,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
