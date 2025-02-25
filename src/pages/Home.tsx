// import styles from "./Home.module.css"

import React from 'react';
import { IPizzaBlockProps } from '../components/PizzaBlock/PizzaBlock.props';
import Categories from '../components/Categogies/Categories';
import Sort from '../components/Sort/Sort';
import Skeleton from '../components/Skeleton/Skeleton';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';

const Home: React.FC = () => {
	const [pizzas, setPizzas] = React.useState<IPizzaBlockProps[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const fakeArr = [...new Array(6)];

	React.useEffect(() => {
		fetch('https://67bc771bed4861e07b3aa6b3.mockapi.io/items')
			.then(res => res.json())
			.then(json => setPizzas(json))
			.finally(() => setIsLoading(false));
	}, []);
	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
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
