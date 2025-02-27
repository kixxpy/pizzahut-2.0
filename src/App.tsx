import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';

interface SearchContextType {
	searchValue: string;
	setSearchValue: (value: string) => void;
}
// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = React.createContext<SearchContextType | undefined>(
	undefined
);

function App() {
	const [searchValue, setSearchValue] = React.useState<string>('');

	return (
		<div>
			<div className='wrapper'>
				<SearchContext.Provider value={{ searchValue, setSearchValue }}>
					<Header />
					<div className='content'>
						<div className='container'>
							<Routes>
								<Route path='/' element={<Home searchValue={searchValue} />} />
								<Route path='/cart' element={<Cart />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</div>
					</div>
				</SearchContext.Provider>
			</div>
		</div>
	);
}

export default App;
