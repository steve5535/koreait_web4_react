import useCartStore from "../stores/useCartStore"

function CartSummary() {
    const items = useCartStore((state) => state.items);
    const clear = useCartStore((state) => state.clearCart);

    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div>
            <span>총 수량{totalQuantity}</span>
            <span>총 금액{totalPrice}</span>
            <button onClick={() => clear()}>장바구니 비우기</button>
        </div>
    )
}

export default CartSummary
