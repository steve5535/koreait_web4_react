import useCartStore from "../stores/useCartStore";

function ProductCard({ product }) {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <article className="productCard">
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>

            <div className="productFooter">
                <strong>{product.price.toLocaleString()}원</strong>

                <button type="button" onClick={() => addItem(product)}>
                    장바구니 담기
                </button>
            </div>
        </article>
    );
}

export default ProductCard;