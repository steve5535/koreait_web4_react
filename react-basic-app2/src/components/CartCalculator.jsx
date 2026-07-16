import { useMemo, useState } from "react";

const initialProducts = [
    {
        id: 1,
        name: "키보드",
        price: 50000,
        quantity: 1,
    },
    {
        id: 2,
        name: "마우스",
        price: 30000,
        quantity: 2,
    },
    {
        id: 3,
        name: "마우스 패드",
        price: 10000,
        quantity: 1,
    },
];

function calculateTotal(products) {
    console.log("총 금액 재 계산 완료")
    let total = 0;

    for (const product of products) {
        total = total + (product.price * product.quantity);
    }

    return total;
}

function CartCalculator() {
    const [products, setProducts] = useState(initialProducts);
    const [memoText, setMemoText] = useState("");

    // const totalPrice = calculateTotal(products);
    const totalPrice = useMemo(() => {
        return calculateTotal(products)
    }, [products]);

    const handleIncreaseQuantity = (productId) => {
        setProducts((previousProducts) =>
            previousProducts.map((product) =>
                product.id === productId
                    ? {
                        ...product,
                        quantity: product.quantity + 1,
                    }
                    : product
            )
        );
    };

    return (
        <section className="section">
            <div className="sectionHeader">
                <p>계산 결과 예제</p>
                <h2>장바구니 금액 계산기</h2>
                <span>렌더링될 때 총 금액 계산이 어떻게 실행되는지 확인합니다.</span>
            </div>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>{product.name}</span>
                        <span>
                            {product.price.toLocaleString()}원 × {product.quantity}개
                        </span>

                        <button
                            type="button"
                            onClick={() => handleIncreaseQuantity(product.id)}
                        >
                            수량 추가
                        </button>
                    </li>
                ))}
            </ul>

            <div>
                <span>총 금액</span>
                <strong>{totalPrice}원</strong>
            </div>

            <label>
                주문 메모
                <input
                    value={memoText}
                    onChange={(event) => setMemoText(event.target.value)}
                    placeholder="배송 요청 사항을 입력하세요"
                />
            </label>

            <p>입력한 메모: {memoText}</p>
        </section>
    );
}

export default CartCalculator;