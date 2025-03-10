import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filter/filterSlice';
import styles from './Search.module.scss';

const Search: React.FC = () => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [valueSearch, setValueSearch] = React.useState('');
	const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
	const dispatch = useDispatch();

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value: string = e.target.value.trimStart();
		setValueSearch(value);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		if (value) {
			timeoutRef.current = setTimeout(() => {
				dispatch(setSearchValue(value));
			}, 400);
		} else {
			dispatch(setSearchValue(''));
		}
	};

	const onClickClear = () => {
		dispatch(setSearchValue(''));
		setValueSearch('');

		inputRef.current?.focus();
	};

	return (
		<div className={styles['search']}>
			<svg
				width='20px'
				height='20px'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
				<g
					id='SVGRepo_tracerCarrier'
					strokeLinecap='round'
					strokeLinejoin='round'
				></g>
				<g id='SVGRepo_iconCarrier'>
					{' '}
					<path
						d='M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
						stroke='#4b4b4b'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					></path>{' '}
				</g>
			</svg>
			<input
				ref={inputRef}
				value={valueSearch}
				onChange={onChangeInput}
				className={styles['input']}
				type='text'
				placeholder='Поиск пицц...'
			/>
			{valueSearch && (
				<button onClick={onClickClear}>
					<svg
						width='30px'
						height='30px'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z'
								fill='#4b4b4b'
							></path>
						</g>
					</svg>
				</button>
			)}
		</div>
	);
};

export default Search;
