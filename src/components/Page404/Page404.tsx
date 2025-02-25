import { Link } from 'react-router-dom';
import styles from './Page404.module.scss';

const Page404: React.FC = () => {
	return (
		<div className={styles['root']}>
			<h1>
				<span>404</span> - Страница не найдена
			</h1>
			<p>Извините, запрошенная страница не существует</p>
			<Link to={'/'}>
				<button>Вернуться на главную</button>
			</Link>
		</div>
	);
};

export default Page404;
