import useCartStore from "../stores/useCartStore";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function CartPanel() {
    const items = useCartStore((state) => state.items);

    return (
        <section className="section">
            <div className="sectionHeader">
                <p>장바구니</p>
                <h2>선택한 강의</h2>
                <span>
                    Zustand store에 저장된 장바구니 상태를 표시합니다.
                </span>
            </div>

            <CartSummary />

            {items.length === 0 ? (
                <p className="emptyMessage">
                    장바구니가 비어 있습니다. 상품을 추가해보세요.
                </p>
            ) : (
                <ul className="cartList">
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default CartPanel;