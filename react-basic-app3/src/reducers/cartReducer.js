export const CART_ACTIONS = {
    ADD_ITEM: "ADD_ITEM",
    INCREASE_QUANTITY: "INCREASE_QUANTITY",
    DECREASE_QUANTITY: "DECREASE_QUANTITY",
    REMOVE_ITEM: "REMOVE_ITEM",
    CLEAR_CART: "CLEAR_CART",
};

export function cartReducer(state, action) {
    switch (action.type) {
        case CART_ACTIONS.ADD_ITEM:
            const selectedProduct = action.payload;

            const existingItem = state.find(
                (item) => item.id === selectedProduct.id
            );

            if (existingItem) {
                return state.map((item) =>
                    item.id === selectedProduct.id ? { ...item, quantity: item.quantity + 1 } : item)
            }

            return [
                ...state,
                {
                    ...selectedProduct,
                    quantity: 1
                }
            ]

        case CART_ACTIONS.INCREASE_QUANTITY:
            return state.map((item) =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            )

        case CART_ACTIONS.DECREASE_QUANTITY:
            return state.map((item) =>
                item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0);

        default:
            return state;
    }
}