import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import brcypt from 'bcrypt';

const apiUrl = 'http://localhost:5000/api/accounts/';

export const fetchAccounts = createAsyncThunk('account/fetchAccounts', async () => {
    try {
        console.log('CALL API: ' + apiUrl);
        const response = await axios.get(apiUrl);
        return [...response.data];
    } catch (error) {
        return error.message;
    }
});

export const addAccount = createAsyncThunk('account/addAccount', async (data, { rejectWithValue }) => {
    try {
        console.log('CALL API: ' + apiUrl);

        const rawPassword = data.password;
        // const salt = brcypt.genSaltSync(10);
        // const hash = brcypt.hashSync(rawPassword, salt);

        const newAccount = {
            Name: data.name,
            PhoneNumber: data.telephone,
            Email: data.email,
            Password: rawPassword,
        };

        const response = await axios.post(apiUrl, newAccount);
        console.log(response);

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(response.data);
        }

        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateAccount = createAsyncThunk('account/updateAccount', async (data) => {
    try {
        const response = await axios.patch(apiUrl + data.Account._id, data.Update);
        if (response.data.status === 'updated') {
            return data.Account;
        }
    } catch (error) {
        return error.message;
    }
});

export const loginAccount = createAsyncThunk('account/addAccount', async (data, { rejectWithValue }) => {
    try {
        console.log('CALL API: ' + apiUrl + 'login');

        const response = await axios.post(apiUrl, data);
        
        console.log(response);

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(response.data);
        }

        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        update: false,
        add: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        login: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'

        newAccount: [],
        currentAccount: [],
        allAccounts: [],

        errorMessage: null,
        errorUpdate: null,
        errorCreate: null,
        errorLogin: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // account/fetchAccounts
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

        // account/updateAccount
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

        // account/addAccount
        builder.addCase(addAccount.pending, (state) => {
            state.add = 'idle';
        });
        builder.addCase(addAccount.fulfilled, (state, action) => {
            state.add = 'added';
            state.newAccount = action.payload;
        });
        builder.addCase(addAccount.rejected, (state, action) => {
            state.add = 'failed';
            state.errorCreate = action.payload;
        });
    },
});

export const selectUpdate = (state) => state.account.update;
export const selectErrorUpdate = (state) => state.account.errorUpdate;

export const selectStatus = (state) => state.account.status;
export const selectAllAccounts = (state) => state.account.allAccounts;
export const selectErrorMessage = (state) => state.account.errorMessage;

export const selectAdd = (state) => state.account.add;
export const selectNewAccount = (state) => state.account.newAccount;
export const selectErrorCreate = (state) => state.account.errorCreate;

export default accountSlice.reducer;
