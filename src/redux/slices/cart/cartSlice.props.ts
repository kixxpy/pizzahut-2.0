export interface Item {
	id: string;
	title: string;
	imageUrl: string;
	sizes: number;
	types: string;
	price: number;
	category?: number;
	rating?: number;
	count: number;
}
export interface CartState {
	totalPrice: number;
	items: Item[];
}
