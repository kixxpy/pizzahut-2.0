// import styles from "./Home.module.css"

import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categogies/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { IPizzaBlockProps } from '../components/PizzaBlock/PizzaBlock.props';
import Skeleton from '../components/Skeleton/Skeleton';
import Sort from '../components/Sort/Sort';
import { setCategoryId } from '../redux/slices/filter/filterSlice';
import { RootState } from '../redux/store';

interface IHomeProps {
	searchValue: string;
}

const Home: React.FC<IHomeProps> = props => {
	const categoryId = useSelector(
		(state: RootState) => state?.filter.categoryId
	);
	const activeItem = useSelector(
		(state: RootState) => state?.filter.activeItem
	);
	const dispatch = useDispatch();

	const { searchValue } = props;
	const [pizzas, setPizzas] = React.useState<IPizzaBlockProps[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const RATING: string | null = activeItem === 0 ? 'rating' : null;
	const PRICE: string | null = activeItem === 1 ? 'price' : null;
	const TITLE: string | null = activeItem === 2 ? 'title' : null;

	const fakeArr = [...new Array(6)];
	const url: string = 'https://67bc771bed4861e07b3aa6b3.mockapi.io/items?';

	React.useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				categoryId === 0
					? `${url}&sortBy=${RATING || PRICE || TITLE}`
					: `${url}&category=${categoryId}&sortBy=${RATING || PRICE || TITLE}`
			)
			.then(res => setPizzas(res.data))
			.finally(() => setIsLoading(false));
	}, [categoryId, activeItem, PRICE, RATING, TITLE]);
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
				{isLoading
					? fakeArr.map((_, index) => <Skeleton key={index} />)
					: pizzas
							.filter(pizza =>
								pizza.title.toLowerCase().includes(searchValue.toLowerCase())
							)
							.map(pizza => (
								<PizzaBlock
									key={pizza.id}
									id={pizza.id}
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
