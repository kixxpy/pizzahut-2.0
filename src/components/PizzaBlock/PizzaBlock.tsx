// import styles from "./PizzaBlock.module.css"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../../redux/slices/cart/cartSlice';
import { selectCart } from '../../redux/slices/cart/selectors';
import { IPizzaBlockProps } from './PizzaBlock.props';

const PizzaBlock: React.FC<IPizzaBlockProps> = props => {
	const { id, title, imageUrl, sizes, types, price } = props;

	const typeNames: string[] = ['тонкое', 'традиционное'];

	const [activeType, setActiveType] = React.useState<number>(0);
	const [activeSize, setActiveSize] = React.useState<number>(0);

	const { items } = useSelector(selectCart);
	const dispatch = useDispatch();
	const onClickAddPizza = () => {
		const item = {
			id,
			title,
			imageUrl,
			price,
			sizes: sizes[activeSize],
			types: typeNames[activeType],
			count: 0,
		};
		dispatch(addItem(item));
	};
	const cartItem = items.find(obj => obj.id === id);
	const addedCount = cartItem ? cartItem.count : 0;

	return (
		<div className='pizza-block-wrapper'>
			<div className='pizza-block'>
				<Link to={`/pizza/${id}`}>
					<img
						className='pizza-block__image'
						src={imageUrl}
						alt='Фотография пиццы'
					/>
					<h4 className='pizza-block__title'>{title}</h4>
				</Link>
				<div className='pizza-block__selector'>
					<ul>
						{types.map(typeIndex => (
							<li
								key={typeIndex}
								className={activeType === typeIndex ? 'active' : ''}
								onClick={() => setActiveType(typeIndex)}
							>
								{typeNames[typeIndex]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, index) => (
							<li
								key={index}
								className={activeSize === index ? 'active' : ''}
								onClick={() => setActiveSize(index)}
							>
								{size} см.
							</li>
						))}
					</ul>
				</div>
				<div className='pizza-block__bottom'>
					<div className='pizza-block__price'>от {price} ₽</div>
					<button
						onClick={onClickAddPizza}
						className='button button--outline button--add'
					>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
								fill='white'
							/>
						</svg>
						<span>Добавить</span>
						{addedCount > 0 && <i>{addedCount}</i>}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PizzaBlock;
