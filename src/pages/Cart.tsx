// import styles from "./Cart.module.css"

// import EmptyCart from '../components/EmptyCart/EmptyCart';
import ProductCart from '../components/ProductCart/ProductCart';

const Cart: React.FC = () => {
	return (
		<div>
			<ProductCart />
			{/* <EmptyCart /> */}
		</div>
	);
};

export default Cart;
