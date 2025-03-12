export interface IPizzaBlockProps {
	id: string;
	title: string;
	imageUrl: string;
	sizes: number[];
	types: number[];
	price: number;
	category?: number;
	rating?: number;
}
