import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/accounts/';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (dispatch, getState) => {
        return await axios.get(apiUrl).then(
            (res) => res.json()
        );
    }
);

const usersSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        status: null,
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'success';
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default usersSlice.reducer;
