import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthProvider } from './contexts/authContext';

// import { CookiesProvider } from 'react-cookie';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<AuthProvider>
			<App />
		</AuthProvider>
	</Provider>
);
