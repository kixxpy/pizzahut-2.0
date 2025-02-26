// import styles from "./Home.module.css"

import React from 'react';
import Categories from '../components/Categogies/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { IPizzaBlockProps } from '../components/PizzaBlock/PizzaBlock.props';
import Skeleton from '../components/Skeleton/Skeleton';
import Sort from '../components/Sort/Sort';

const Home: React.FC = () => {
	const [pizzas, setPizzas] = React.useState<IPizzaBlockProps[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [categoryId, setCategoryId] = React.useState<number>(0);
	const [activeItem, setActiveItem] = React.useState<number>(0);

	const RATING: string | null = activeItem === 0 ? 'rating' : null;
	const PRICE: string | null = activeItem === 1 ? 'price' : null;
	const TITLE: string | null = activeItem === 2 ? 'title' : null;

	const fakeArr = [...new Array(6)];

	React.useEffect(() => {
		setIsLoading(true);
		fetch(
			categoryId === 0
				? `https://67bc771bed4861e07b3aa6b3.mockapi.io/items?&sortBy=${
						RATING || PRICE || TITLE
				  }`
				: `https://67bc771bed4861e07b3aa6b3.mockapi.io/items?category=${categoryId}&sortBy=${
						RATING || PRICE || TITLE
				  }`
		)
			.then(res => res.json())
			.then(json => setPizzas(json))
			.finally(() => setIsLoading(false));
	}, [categoryId, activeItem, PRICE, RATING, TITLE]);
	return (
		<>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onClickCategory={i => setCategoryId(i)}
				/>
				<Sort activeItem={activeItem} onClickActiveItem={setActiveItem} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? fakeArr.map((_, index) => <Skeleton key={index} />)
					: pizzas.map(pizza => (
							<PizzaBlock
								key={pizza.id}
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
