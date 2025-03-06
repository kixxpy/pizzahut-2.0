import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cart/cartSlice';
import filter from './slices/filter/filterSlice';
import pizza from './slices/pizza/pizzaSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: {
		filter,
		cart,
		pizza,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
