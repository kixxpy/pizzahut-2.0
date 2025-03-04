import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Item } from './cartSlice.props';

export const calcTotalPrice = (items: Item[]) => {
	return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const initialState: CartState = {
	totalPrice: 0,
	items: [],
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

		// Пересчитываем общую стоимость

		// addItem: (state, action: PayloadAction<Item>) => {
		// 	state.items.push(action.payload);
		// 	state.totalPrice = state.items.reduce((sum, obj) => obj.price + sum, 0);
		// },

		removeItem: (state, action: PayloadAction<Item>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id);
		},
		clearItem: state => {
			state.items = [];
		},
	},
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
