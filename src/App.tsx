import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';

function App() {
	const [searchValue, setSearchValue] = React.useState<string>('');
	return (
		<div>
			<div className='wrapper'>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home searchValue={searchValue} />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
