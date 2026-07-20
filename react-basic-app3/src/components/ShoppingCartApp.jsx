import { useMemo, useReducer, useRef, useState } from "react";
import { products } from "../data/products";
import { CART_ACTIONS, cartReducer } from "../reducers/cartReducer";

function ShoppingCartApp() {
    const [searchKeyword, setSearchKeyword] = useState("");
    const searchInputRef = useRef(null);

    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const handleAddItem = (product) => {
        dispatch({
            type: CART_ACTIONS.ADD_ITEM,
            payload: product
        });
    }

    const handleIncreaseQuantity = (productId) => {
        dispatch({
            type: CART_ACTIONS.INCREASE_QUANTITY,
            payload: productId
        });
    }

    const handleDecreaseQuantity = (productId) => {
        dispatch({
            type: CART_ACTIONS.DECREASE_QUANTITY,
            payload: productId
        });
    }

    const handleResetSearch = () => {
        setSearchKeyword("");

        searchInputRef.current.focus();
    };

    const filterProducts = products.filter((product) => {
        return product.name
            .toLowerCase()
            .includes(searchKeyword.trim().toLowerCase());
    })

    const filterdProducts = useMemo(() => {
        console.log("필터링");
        return products.filter((product) => {
            return product.name
                .toLowerCase()
                .includes(searchKeyword.trim().toLowerCase());
        }, [searchKeyword]);
    })

    return (
        <main className="page">
            <div className="shopping-cart-app">
                <header className="app-header">
                    <section className="search-card">
                        <label htmlFor="product-search">상품 검색</label>

                        <div className="search-control">
                            <input
                                id="product-search"
                                type="text"
                                value={searchKeyword}
                                onChange={(event) => {
                                    setSearchKeyword(event.target.value);
                                }}
                                ref={searchInputRef}
                                placeholder="상품 이름을 입력하세요."
                            />

                            <button type="button" className="secondary-button" onClick={handleResetSearch}>
                                검색 초기화
                            </button>
                        </div>
                    </section>
                    <section className="content-card">
                        <div className="section-header">
                            <div>
                                <p className="section-label">상품 목록</p>
                                <h2>판매 상품</h2>
                            </div>
                        </div>

                        <div className="product-grid">
                            {filterProducts.map((product) => (
                                <article className="product-card" key={product.id}>
                                    <div>
                                        <h3>{product.name}</h3>
                                        <p className="product-description">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="product-footer">
                                        <strong>
                                            {product.price.toLocaleString("ko-KR")}원
                                        </strong>

                                        <button type="button" className="primary-button" onClick={() => {
                                            handleAddItem(product)
                                        }}>
                                            장바구니 담기
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                    <section className="content-card">
                        <div className="section-header">
                            <div>
                                <p className="section-label">장바구니</p>
                                <h2>선택한 상품</h2>
                            </div>
                        </div>

                        {cartItems.length === 0 ? (
                            <p className="empty-message">
                                장바구니에 담긴 상품이 없습니다.
                            </p>
                        ) : (
                            <div className="cart-list">
                                {cartItems.map((item) => (
                                    <article className="cart-item" key={item.id}>
                                        <div className="cart-item-info">
                                            <h3>{item.name}</h3>
                                            <p>
                                                개당 {item.price.toLocaleString("ko-KR")}원
                                            </p>
                                        </div>

                                        <div className="quantity-control">
                                            <button type="button" onClick={() => {
                                                handleDecreaseQuantity(item.id)
                                            }}>-</button>
                                            <span>{item.quantity}</span>
                                            <button type="button" onClick={() => {
                                                handleIncreaseQuantity(item.id)
                                            }}>+</button>
                                        </div>

                                        <strong className="cart-item-price">
                                            {(item.price * item.quantity).toLocaleString(
                                                "ko-KR"
                                            )}
                                            원
                                        </strong>

                                        <button type="button" className="remove-button">
                                            삭제
                                        </button>
                                    </article>
                                ))}
                            </div>
                        )}
                    </section>
                </header>
            </div>
        </main>
    );
}

export default ShoppingCartApp;