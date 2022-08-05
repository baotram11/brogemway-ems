import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/accounts/';

export const fetchAccounts = createAsyncThunk('account/fetchAccounts', async (accessToken) => {
	try {
		console.log('CALL API: ' + apiUrl);
		const response = await axios.get(apiUrl, { headers: { token: `Bearer ${accessToken}` } });
		return [...response.data];
	} catch (error) {
		return error.message;
	}
});

export const fetchAccountById = createAsyncThunk('account/fetchAccountById', async (data) => {
	try {
		console.log(data.accessToken);
		console.log('CALL API: http://localhost:5000/api/accounts/' + data.id + ' Bearer ' + data.accessToken);
		const response = await axios.get(apiUrl + data.id, {
			headers: {
				token: `Bearer ${data.accessToken}`,
			},
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		return error.message;
	}
});

export const updateAccount = createAsyncThunk('account/updateAccount', async (accessToken, data) => {
	try {
		const response = await axios.patch(
			apiUrl + data.Account._id,
			{ headers: { token: `Bearer ${accessToken}` } },
			data.Update
		);
		if (response.data.statusFetch === 'updated') {
			return data.Account;
		}
	} catch (error) {
		return error.message;
	}
});

export const lockAccount = createAsyncThunk('account/lockAccount', async (accessToken, data) => {
	try {
		const response = await axios.patch(
			apiUrl + '/lock/' + data.Account._id,
			{ headers: { token: `Bearer ${accessToken}` } },
			data.Update
		);
		if (response.data.statusFetch === 'locked') {
			return data.Account;
		}
	} catch (error) {
		return error.message;
	}
});

export const unlockAccount = createAsyncThunk('account/unlockAccount', async (accessToken, data) => {
	try {
		const response = await axios.patch(
			apiUrl + '/unlock/' + data.Account._id,
			{ headers: { token: `Bearer ${accessToken}` } },
			data.Update
		);
		if (response.data.statusFetch === 'unlocked') {
			return data.Account;
		}
	} catch (error) {
		return error.message;
	}
});

export const accountSlice = createSlice({
	name: 'account',
	initialState: {
		statusUpdate: false, // 'true' | 'false'
		statusFetch: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		statusFetchById: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'

		account: [],
		allAccounts: [],

		errorFetch: null,
		errorFetchById: null,
		errorUpdate: null,

		lock: {
			statusLock: false, // 'true' | 'false'
			errorLock: null,
		},
		unlock: {
			statusUnlock: false, // 'true' | 'false'
			errorUnlock: null,
		},
	},
	reducers: {},
	extraReducers: (builder) => {
		// account/fetchAccounts
		builder.addCase(fetchAccounts.pending, (state, action) => {
			state.statusFetch = 'loading';
		});
		builder.addCase(fetchAccounts.fulfilled, (state, action) => {
			state.statusFetch = 'succeeded';
			state.allAccounts = action.payload;
		});
		builder.addCase(fetchAccounts.rejected, (state, action) => {
			state.statusFetch = 'failed';
			state.errorFetch = action.error.message;
		});

		// account/fetchAccountById
		builder.addCase(fetchAccountById.pending, (state, action) => {
			state.statusFetchById = 'loading';
		});
		builder.addCase(fetchAccountById.fulfilled, (state, action) => {
			state.statusFetchById = 'succeeded';
			state.account = action.payload;
			console.log(action.payload);
		});
		builder.addCase(fetchAccountById.rejected, (state, action) => {
			state.statusFetchById = 'failed';
			state.errorFetchById = action.error.message;
		});

		// account/updateAccount
		builder.addCase(updateAccount.pending, (state) => {
			state.statusUpdate = true;
		});
		builder.addCase(updateAccount.fulfilled, (state, action) => {
			state.statusUpdate = true;
		});
		builder.addCase(updateAccount.rejected, (state, action) => {
			state.statusUpdate = false;
			state.errorUpdate = action.payload;
		});

		// account/lockAccount
		builder.addCase(lockAccount.pending, (state) => {
			state.lock.statusLock = true;
		});
		builder.addCase(lockAccount.fulfilled, (state, action) => {
			state.lock.statusLock = true;
		});
		builder.addCase(lockAccount.rejected, (state, action) => {
			state.lock.statusLock = false;
			state.lock.errorLock = action.payload;
		});

		// account/unlockAccount
		builder.addCase(unlockAccount.pending, (state) => {
			state.unlock.statusUnlock = true;
		});
		builder.addCase(unlockAccount.fulfilled, (state, action) => {
			state.unlock.statusUnlock = true;
		});
		builder.addCase(unlockAccount.rejected, (state, action) => {
			state.unlock.statusUnlock = false;
			state.unlock.errorUnlock = action.payload;
		});
	},
});

export const selectStatusFetch = (state) => state.account.statusFetch;
export const selectAllAccounts = (state) => state.account.allAccounts;
export const selectErrorFetch = (state) => state.account.errorFetch;

export const selectStatusFetchById = (state) => state.account.statusFetchById;
export const selectAccount = (state) => state.account.account;
export const selectErrorFetchById = (state) => state.account.errorFetchById;

export const selectStatusUpdate = (state) => state.account.statusUpdate;
export const selectErrorUpdate = (state) => state.account.errorUpdate;

export const selectStatusLock = (state) => state.account.lock.statusLock;
export const selectErrorLock = (state) => state.account.lock.errorLock;

export const selectStatusUnlock = (state) => state.account.unlock.statusUnlock;
export const selectErrorUnlock = (state) => state.account.unclock.errorUnlock;

export default accountSlice.reducer;
