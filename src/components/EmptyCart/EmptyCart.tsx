import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

const EmptyCart: React.FC = () => {
	return (
		<div className={styles['root']}>
			<h1>
				Корзина пустая <span>😕</span>
			</h1>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу. <br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src='/img/not-found.png' alt='Карзина пуста' />
			<Link to={'/'}>
				<button>Вернуться назад</button>
			</Link>
		</div>
	);
};

export default EmptyCart;
