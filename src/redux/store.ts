import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cart/cartSlice';
import filter from './slices/filter/filterSlice';

export const store = configureStore({
	reducer: {
		filter,
		cart,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
