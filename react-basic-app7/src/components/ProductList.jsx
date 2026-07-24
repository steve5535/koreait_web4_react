import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
    return (
        <section className="section">
            <div className="sectionHeader">
                <p>상품 목록</p>
                <h2>강의 상품</h2>
                <span>
                    상품 카드를 클릭해 장바구니에 추가합니다.
                </span>
            </div>

            <div className="productGrid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;