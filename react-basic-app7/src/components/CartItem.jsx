import useCartStore from "../stores/useCartStore";

function CartItem({ item }) {
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const itemTotalPrice = item.price * item.quantity;

    return (
        <li className="cartItem">
            <div>
                <h3>{item.name}</h3>
                <p>{item.price.toLocaleString()}원</p>
                <strong>{itemTotalPrice.toLocaleString()}원</strong>
            </div>

            <div className="quantityControl">
                <button type="button" onClick={() => decreaseQuantity(item.id)}>
                    -
                </button>

                <span>{item.quantity}</span>

                <button type="button" onClick={() => increaseQuantity(item.id)}>
                    +
                </button>
            </div>

            <button
                type="button"
                className="danger"
                onClick={() => removeItem(item.id)}
            >
                삭제
            </button>
        </li>
    );
}

export default CartItem;