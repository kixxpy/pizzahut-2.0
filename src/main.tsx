import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import './index.css';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<StrictMode>
				<App />
			</StrictMode>
		</Provider>
	</BrowserRouter>
);
