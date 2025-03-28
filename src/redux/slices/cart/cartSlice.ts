import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';
import { getCartFromLS } from '../../../utils/getCartFromLS';
import { CartState, Item } from './cartSlice.props';

const { items, totalPrice } = getCartFromLS();
const initialState: CartState = {
	totalPrice,
	items,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Item>) => {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		minusItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload);

			if (findItem) {
				findItem.count--;
			}

			state.totalPrice = calcTotalPrice(state.items);
		},
		removeItem: (state, action: PayloadAction<Item>) => {
			const findItem = state.items.find(item => item.id === action.payload.id);

			if (findItem) {
				state.totalPrice -= findItem.price * findItem.count;
				state.items = state.items.filter(item => item.id !== action.payload.id);
			}
		},
		clearItem: state => {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
