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

export const updateAccount = createAsyncThunk(
    'accounts/updateAccount',
    async (data) => {
        try {
            const response = await axios.patch(
                apiUrl + data.Account.UserID,
                data.Update
            );
            if(response.data.status === "updated"){
                return data.Account;
            }
        } catch (error) {
            return error.message;
        }
    }
);

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        update: false,
        allAccounts: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        errorMessage: null,
        errorUpdate: null
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

        builder.addCase(updateAccount.pending, (state) => {
            state.update = true;
        });
        builder.addCase(updateAccount.fulfilled, (state, action) => {
            state.update = true;
        });
        builder.addCase(updateAccount.rejected, (state, action) => {
            state.update = false;
            state.errorUpdate = action.payload;
        });
    },
});

export const selectUpdate = (state) => state.account.update;
export const selectAllAccounts = (state) => state.account.allAccounts;
export const selectStatus = (state) => state.account.status;
export const selectErrorMessage = (state) => state.account.errorMessage;

export default accountSlice.reducer;
