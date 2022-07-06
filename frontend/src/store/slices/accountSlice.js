import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/accounts/';

export const fetchAccounts = createAsyncThunk(
    'accounts/fetchAccounts',
    async () => {
        try {
            console.log('CALL API: ' + apiUrl);
            const response = await axios.get(apiUrl);
            return [...response.data];
        } catch (error) {
            return error.message;
        }
    }
);

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        allAccounts: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        errorMessage: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAccounts.pending, (state, action) => {
            state.status = 'loading';
        });

        builder.addCase(fetchAccounts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.allAccounts = action.payload;
        });

        builder.addCase(fetchAccounts.rejected, (state, action) => {
            state.status = 'failed';
            state.errorMessage = action.error.message;
        });
    },
});

export const selectAllAccounts = (state) => state.account.allAccounts;
export const selectStatus = (state) => state.account.status;
export const selectErrorMessage = (state) => state.account.errorMessage;

export default accountSlice.reducer;
