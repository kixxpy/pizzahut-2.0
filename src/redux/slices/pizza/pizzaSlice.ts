import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchPizzasProps, Pizza, Status } from './pizzaSlice.props';

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasProps>(
	'pizza/fetchPizzasStatus',
	async ({ BASEURL, categoryId, sortBy }, thunkAPI) => {
		console.log(thunkAPI);
		const { data } = await axios.get<Pizza[]>(
			categoryId === 0
				? `${BASEURL}&sortBy=${sortBy}`
				: `${BASEURL}&category=${categoryId}&sortBy=${sortBy}`
		);
		return data;
	}
);

interface IPizzaState {
	items: Pizza[];
	status: Status;
}

const initialState: IPizzaState = {
	items: [],
	status: Status.Idle,
};

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchPizzas.pending, state => {
				state.status = Status.Loading;
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.status = Status.Succeeded;
				state.items = action.payload;
			})
			.addCase(fetchPizzas.rejected, state => {
				state.status = Status.Failed;
			});
	},
});

export default pizzaSlice.reducer;
