import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	addItem,
	clearItem,
	minusItem,
	removeItem,
} from '../../redux/slices/cart/cartSlice';
import { Item } from '../../redux/slices/cart/cartSlice.props';
import { RootState } from '../../redux/store';
import ModalCart from '../ModalCart/ModalCart';
import styles from './ProductCart.module.scss';

const ProductCart: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

	const { totalPrice, items } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	const clearCart = () => setIsModalOpen(true);

	const handleConfirmClear = () => {
		dispatch(clearItem());
		setIsModalOpen(false);
	};
	const minusItemСart = (id: string) => {
		dispatch(minusItem(id));
	};
	const handleCancelClear = () => setIsModalOpen(false);

	const totalCount = items.reduce(
		(sum: number, item: Item) => sum + item.count,
		0
	);
	return (
		<div className={styles['container']}>
			<div>
				<ModalCart
					isOpen={isModalOpen}
					onConfirm={handleConfirmClear}
					onCancel={handleCancelClear}
				/>
			</div>
			<div className={styles['cartTop']}>
				<div className={styles['title']}>
					<img src='/img/product-cart/cart.svg' alt='Иконка корзины' />
					<h2>Корзина</h2>
				</div>
				<button onClick={() => clearCart()} className={styles['resetCart']}>
					<img src='/img/product-cart/trash.svg' alt='Иконка мусорного ведра' />
					<span>Очистить корзину</span>
				</button>
			</div>
			<div className={styles['items']}>
				{items.map(item => (
					<div key={item.id} className={styles['item']}>
						<div className={styles['itemInfo']}>
							<img src={item.imageUrl} alt='Изображенеие пиццы' />
							<div className={styles['itemText']}>
								<h3>{item.title}</h3>
								<p>{item.types} тесто, 26 см</p>
							</div>
						</div>
						<div className={styles['itemCount']}>
							<button
								className={styles['minus']}
								disabled={item.count === 1}
								onClick={() => minusItemСart(item.id)}
							>
								<svg
									width='10'
									height='10'
									viewBox='0 0 10 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
										fill='#EB5A1E'
									/>
								</svg>
							</button>
							<span>{item.count}</span>
							<button onClick={() => dispatch(addItem(item))}>
								<svg
									width='10'
									height='10'
									viewBox='0 0 10 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
										fill='#EB5A1E'
									/>
									<path
										d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
										fill='#EB5A1E'
									/>
								</svg>
							</button>
						</div>
						<div className={styles['price']}>
							<p>{item.price * item.count} ₽</p>
						</div>
						<div
							onClick={() => dispatch(removeItem(item))}
							className={styles['delete']}
						>
							<button>
								<svg
									width='10'
									height='10'
									viewBox='0 0 10 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
										fill='rgb(215, 215, 215)'
									/>
									<path
										d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
										fill='rgb(215, 215, 215)'
									/>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
			<div className={styles['bottomCart']}>
				<div className={styles['count']}>
					Всего пицц: <span>{totalCount} шт.</span>
				</div>
				<div className={styles['sum']}>
					Сумма заказа: <span>{totalPrice} ₽</span>
				</div>
			</div>
			<div className={styles['buttons']}>
				<button className={styles['goBack']}>
					<Link to={'/'}>
						<svg
							width='8'
							height='13'
							viewBox='0 0 8 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7 13L1 6.93015L6.86175 1'
								stroke='#D3D3D3'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span>Вернуться назад</span>
					</Link>
				</button>
				<button className={styles['pay']}>Оплатить сейчас</button>
			</div>
		</div>
	);
};

export default ProductCart;
