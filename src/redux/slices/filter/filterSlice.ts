import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
	categoryId: number;
	activeItem: number;
}

const initialState: FilterState = {
	categoryId: 0,
	activeItem: 0,
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId: (state, action: PayloadAction<number>) => {
			state.categoryId = action.payload;
		},
		setActiveItem: (state: FilterState, action: PayloadAction<number>) => {
			state.activeItem = action.payload;
		},
	},
});

export const { setCategoryId, setActiveItem } = filterSlice.actions;

export default filterSlice.reducer;
