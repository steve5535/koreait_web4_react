import { create } from "zustand";

const useCartStore = create((set) => ({
    items: [],
    // a:() => set((state) => {}),
    addItem: (product) => set((state) => {

        const existingItem = state.items.find((item) => item.id === product.id)

        if (existingItem) {
            return {
                items: state.items.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
        }

        return {
            items: [
                ...state.items,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: +1
                }
            ]
        }
    }),
    increaseQuantity: (productId) => set((state) => {
        return {
            items: state.items.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        }
    }),
    decreaseQuantity: (productId) => set((state) => {
        return {
            items: state.items.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0)
        }
    }),
    removeItem: (productId) => set((state) => {
        return {
            items: state.items.filter((item) => item.id !== productId)
        }
    }),
    clearCart: () => set((state) => {
        return {
            items: []
        }
    })
}))

export default useCartStore;