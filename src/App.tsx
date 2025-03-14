import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { RootState } from './redux/store';
import './scss/app.scss';

const Cart = lazy(() => import('./pages/Cart'));
const FullPizza = lazy(() => import('./components/FullPizza/FullPizza'));
const NotFound = lazy(() => import('./pages/NotFound'));
function App() {
	const { searchValue } = useSelector((state: RootState) => state.filter);

	return (
		<div>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<Suspense fallback={<div>Loading...</div>}>
							<Routes>
								<Route path='/' element={<Home searchValue={searchValue} />} />
								<Route path='/cart' element={<Cart />} />
								<Route path='/pizza/:id' element={<FullPizza />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
