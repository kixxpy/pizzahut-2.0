import React from 'react';
import Categories from './components/Categogies/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import { IPizzaBlockProps } from './components/PizzaBlock/PizzaBlock.props';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

function App() {
	const [pizzas, setPizzas] = React.useState<IPizzaBlockProps[]>([]);

	React.useEffect(() => {
		fetch('https://67bc771bed4861e07b3aa6b3.mockapi.io/items')
			.then(res => res.json())
			.then(json => setPizzas(json));
	}, []);

	return (
		<div>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<div className='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 className='content__title'>Все пиццы</h2>
						<div className='content__items'>
							{pizzas.map(pizza => (
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
