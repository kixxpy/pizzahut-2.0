import { Item } from '../redux/slices/cart/cartSlice.props';

export const calcTotalPrice = (items: Item[]) => {
	return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
