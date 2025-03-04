export interface IPizzaBlockProps {
	id: number;
	title: string;
	imageUrl: string;
	sizes: number[];
	types: number[];
	price: number;
	category?: number;
	rating?: number;
}
