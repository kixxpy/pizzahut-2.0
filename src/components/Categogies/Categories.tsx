// import styles from "./Categories.module.css
import React from 'react';

const Categories: React.FC = () => {
	const [activeIndex, setActiveIndex] = React.useState<number>(0);
	const arrPizzaName = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const handleCategory = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<div className='categories'>
			<ul>
				{arrPizzaName.map((name, index) => (
					<li
						key={index}
						onClick={() => handleCategory(index)}
						className={activeIndex === index ? 'active' : ''}
					>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
