import { useSelector } from 'react-redux';
import EmptyCart from '../components/EmptyCart/EmptyCart';
import ProductCart from '../components/ProductCart/ProductCart';
import { RootState } from '../redux/store';

const Cart: React.FC = () => {
	// const dispatch = useDispatch();
	const items = useSelector((state: RootState) => state.cart.items);
	return <div>{items.length > 0 ? <ProductCart /> : <EmptyCart />}</div>;
};

export default Cart;
