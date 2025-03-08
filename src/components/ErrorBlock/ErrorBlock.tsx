import styles from './ErrorBlock.module.scss';

const ErrorBlock: React.FC = () => {
	return (
		<div className={styles['wrapper']}>
			<div className={styles['img']}>
				<img src='/img/530.svg' alt='Иконка ошибки' />
			</div>
			<div className={styles['text']}>
				<h2>Ошибка получения данных</h2>
				<p>Не удалось получить данные, попробуйте повторить попытку позже</p>
			</div>
		</div>
	);
};

export default ErrorBlock;
