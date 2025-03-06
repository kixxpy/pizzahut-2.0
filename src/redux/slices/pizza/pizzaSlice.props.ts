export interface IPizzaState {
	items: Pizza[];
}

export interface Pizza {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
	rating: number;
}

export interface FetchPizzasProps {
	BASEURL: string;
	categoryId: number;
	sortBy: string;
}
export const enum Status {
	Idle = 'idle',
	Loading = 'loading',
	Succeeded = 'succeeded',
	Failed = 'failed',
}
