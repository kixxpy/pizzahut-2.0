// import styles from "./Home.module.css"

import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categogies/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';
import Sort from '../components/Sort/Sort';
import { setCategoryId } from '../redux/slices/filter/filterSlice';
import { fetchPizzas } from '../redux/slices/pizza/pizzaSlice';
import { RootState, useAppDispatch } from '../redux/store';

interface IHomeProps {
	searchValue: string;
}

const Home: React.FC<IHomeProps> = props => {
	const categoryId = useSelector(
		(state: RootState) => state?.filter.categoryId
	);
	const status = useSelector((state: RootState) => state.pizza.status);
	const activeItem = useSelector(
		(state: RootState) => state?.filter.activeItem
	);
	const pizzas = useSelector((state: RootState) => state.pizza.items);
	const dispatch = useAppDispatch();

	const { searchValue } = props;
	const fakeArr = [...new Array(6)];
	const BASEURL: string = 'https://67bc771bed4861e07b3aa6b3.mockapi.io/items?';
	const sortBy =
		activeItem === 0 ? 'rating' : activeItem === 1 ? 'price' : 'title';
	const getPizzas = React.useCallback(async () => {
		try {
			dispatch(
				fetchPizzas({
					BASEURL,
					categoryId,
					sortBy,
				})
			);
		} catch (error) {
			console.log(error);
		}
	}, [categoryId, sortBy, dispatch]);

	React.useEffect(() => {
		getPizzas();
	}, [getPizzas]);

	return (
		<>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onClickCategory={i => dispatch(setCategoryId(i))}
				/>
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{status === 'failed' && <h1>Произошла ошибка</h1>}
				{status === 'loading'
					? fakeArr.map((_, index) => <Skeleton key={index} />)
					: pizzas
							.filter(pizza =>
								pizza.title.toLowerCase().includes(searchValue.toLowerCase())
							)
							.map(pizza => (
								<PizzaBlock
									key={pizza.id}
									id={Number(pizza.id)}
									title={pizza.title}
									imageUrl={pizza.imageUrl}
									price={pizza.price}
									sizes={pizza.sizes}
									types={pizza.types}
								/>
							))}
			</div>
		</>
	);
};

export default Home;
