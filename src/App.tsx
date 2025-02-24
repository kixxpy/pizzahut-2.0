import pizzas from './assets/pizza.json';
import Categories from './components/Categogies/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

function App() {
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
									img={pizza.imageUrl}
									sizes={pizza.sizes}
									types={pizza.types}
									price={pizza.price}
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
