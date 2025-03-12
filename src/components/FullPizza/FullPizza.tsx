import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './FullPizza.module.scss';
import { FullPizzaProps } from './FullPizza.props';

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = React.useState<FullPizzaProps>();

	const { id } = useParams();
	const navigate = useNavigate();
	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					`https://67bc771bed4861e07b3aa6b3.mockapi.io/items?id=${id}`
				);
				if (data.length > 0) {
					setPizza(data[0]);
				} else {
					navigate('/');
				}
			} catch (error) {
				console.log(error);
				navigate('/');
			}
		}

		fetchPizza();
	}, [id, navigate]);

	if (!pizza) {
		return <>Загрузка...</>;
	}

	return (
		<div className='container'>
			<div className={styles['wrapper']}>
				<div className={styles['img']}>
					<img src={pizza.imageUrl} />
				</div>
				<div className={styles['text']}>
					<h2>{pizza.title}</h2>
					<h4>{pizza.price} ₽</h4>
					<Link to='/'>
						<button className='button button--outline button--add'>
							<span>Назад</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FullPizza;
