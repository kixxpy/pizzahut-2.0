import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
	return (
		<Link to={'/'}>
			<div className='header__logo'>
				<img width='38' src='img/pizza-logo.svg' alt='Логотип пицца хат' />
				<div>
					<h1>Pizza Hut</h1>
					<p>самая вкусная пицца во вселенной</p>
				</div>
			</div>
		</Link>
	);
};

export default Logo;
