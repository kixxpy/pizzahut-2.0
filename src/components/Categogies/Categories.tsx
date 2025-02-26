// import styles from "./Categories.module.css
import React from 'react';
import { ICategoryProps } from './Categories.props';

const Categories: React.FC<ICategoryProps> = props => {
	const { value, onClickCategory } = props;
	const arrPizzaName: string[] = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<div className='categories'>
			<ul>
				{arrPizzaName.map((name, index) => (
					<li
						key={index}
						onClick={() => onClickCategory(index)}
						className={value === index ? 'active' : ''}
					>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
