// import styles from "./Sort.module.css"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '../../redux/slices/filter/filterSlice';
import { RootState } from '../../redux/store';
import { SortProperty } from './Sort.props';

const Sort: React.FC = () => {
	const sortRef = React.useRef<HTMLDivElement>(null);

	const actionItem = useSelector((state: RootState) => state.filter.activeItem);
	const dispatch = useDispatch();
	const sortItems: SortProperty[] = [
		SortProperty.POPULARITY,
		SortProperty.PRICE,
		SortProperty.ALPHABET,
	];

	const [open, setOpen] = React.useState<boolean>(false);

	const togleActiveItem = (index: number): void => {
		dispatch(setActiveItem(index));
		setOpen(false);
	};

	const selectedItem: SortProperty = sortItems[actionItem];

	React.useEffect(() => {
		if (open) {
			const handleClickOutside = (e: MouseEvent) => {
				if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
					setOpen(false);
					console.log('click outside');
				}
			};

			window.addEventListener('click', handleClickOutside);

			return () => window.removeEventListener('click', handleClickOutside);
		}
	}, [open]);

	return (
		<div ref={sortRef} className='sort'>
			<div className='sort__label'>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => setOpen(!open)}>{selectedItem}</span>
			</div>
			{open && (
				<div className='sort__popup'>
					<ul>
						{sortItems.map((item, index) => (
							<li
								key={index}
								className={actionItem === index ? 'active' : ''}
								onClick={() => togleActiveItem(index)}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sort;
