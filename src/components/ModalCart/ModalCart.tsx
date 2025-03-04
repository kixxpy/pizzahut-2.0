import styles from './ModalCart.module.scss';

const ModalCart: React.FC<{
	isOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}> = ({ isOpen, onConfirm, onCancel }) => {
	if (!isOpen) return null;

	return (
		<div className={styles['modalOverlay']}>
			<div className={styles['modalContent']}>
				<p>Вы уверены, что хотите очистить корзину?</p>
				<div className={styles['modalButtons']}>
					<button onClick={onConfirm}>Да, очистить</button>
					<button onClick={onCancel}>Отмена</button>
				</div>
			</div>
		</div>
	);
};
export default ModalCart;
