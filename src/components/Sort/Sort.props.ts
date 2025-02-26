export const enum SortProperty {
	POPULARITY = 'популярности',
	PRICE = 'цене',
	ALPHABET = 'алфавиту',
}
export interface ISortProps {
	activeItem: number;
	onClickActiveItem: (i: number) => void;
}
