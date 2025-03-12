import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import FullPizza from './components/FullPizza/FullPizza';
import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { RootState } from './redux/store';
import './scss/app.scss';

function App() {
	const { searchValue } = useSelector((state: RootState) => state.filter);

	return (
		<div>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home searchValue={searchValue} />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/pizza/:id' element={<FullPizza />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
