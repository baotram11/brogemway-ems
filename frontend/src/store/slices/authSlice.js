import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/auth/';

export const loginUser = createAsyncThunk('auth/loginUser', async (data, { rejectWithValue }) => {
	try {
		console.log('CALL API: ' + apiUrl + 'login');
		console.log(data);

		const response = await axios.post(apiUrl + 'login', data);
		console.log(response);

		if (response.status < 200 || response.status >= 300) {
			return rejectWithValue(response.data);
		}

		return response.data;
	} catch (error) {
		console.log(error.response);
		return rejectWithValue(error.response);
	}
});

export const registerUser = createAsyncThunk('auth/registerUser', async (data, { rejectWithValue }) => {
	try {
		console.log('CALL API: ' + apiUrl);

		const newUser = {
			Name: data.name,
			PhoneNumber: data.telephone,
			Email: data.email,
			Password: data.password,
		};

		const response = await axios.post(apiUrl + 'register', newUser);
		console.log(response);

		if (response.status < 200 || response.status >= 300) {
			return rejectWithValue(response.data);
		}

		return response.data;
	} catch (error) {
		console.log(error.response);
		if (error.response.status === 422) return rejectWithValue('Số điện thoại đã tồn tại!');
	}
});

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		login: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		register: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'

		currentUser: null,
		newUser: null,

		errorLogin: null,
		errorRegister: null,
	},
	reducers: {
		logout: (state) => {
			state.currentUser = null;
			state.newUser = null;

			state.errorLogin = null;
			state.errorRegister = null;

			state.login = 'idle';
			state.register = 'idle';
		},
	},
	extraReducers: (builder) => {
		// auth/loginUser
		builder.addCase(loginUser.pending, (state) => {
			state.login = 'loading';
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.login = 'succeeded';
			state.currentUser = action.payload;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.login = 'failed';
			state.errorLogin = action.payload.data;
		});

		// auth/registerUser
		builder.addCase(registerUser.pending, (state) => {
			state.register = 'loading';
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.register = 'succeeded';
			state.newUser = action.payload;
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			state.register = 'failed';
			state.errorRegister = action.payload;
		});
	},
});

export const selectLogin = (state) => state.auth.login;
export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectErrorLogin = (state) => state.auth.errorLogin;

export const selectRegister = (state) => state.auth.register;
export const selectNewUser = (state) => state.auth.newUser;
export const selectErrorRegister = (state) => state.auth.errorRegister;

export const { logout } = authSlice.actions;

export default authSlice.reducer;
