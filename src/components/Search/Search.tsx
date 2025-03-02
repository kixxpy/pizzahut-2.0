import React from 'react';
import { SearchContext } from '../../App';
import styles from './Search.module.scss';

const Search: React.FC = () => {
	const context = React.useContext(SearchContext);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [searchValue, setSearchValue] = React.useState('');
	const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			if (context) {
				context.setSearchValue(value);
			}
		}, 400);
	};

	const onClickClear = () => {
		setSearchValue('');
		if (context) {
			context.setSearchValue('');
		}
		inputRef.current?.focus();
	};

	if (!context) {
		console.error('useSearch must be used within a SearchProvider');
		return null;
	}

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
				value={searchValue}
				onChange={onChangeInput}
				className={styles['input']}
				type='text'
				placeholder='Поиск пицц...'
			/>
			{searchValue && (
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
