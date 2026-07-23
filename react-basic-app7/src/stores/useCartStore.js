import { create } from "zustand";

const useCartStore = create((set) => ({
    items: [1, 2, 3],
    // a:() => set((state) => {}),
    addItem: (product) => set((state) => {
        console.log('addItem실행');
    }),
    increaseQuantity: (prodctId) => set((state) => {
        console.log('increaseQuantity실행');
    }),
    decreaseQuantity: (prodctId) => set((state) => {
        console.log('decreaseQuantity실행');
    }),
    removeItem: (prodctId) => set((state) => {
        console.log('removeItem실행');
    }),
    clearCart: () => set((state) => {
        console.log('clearCart실행');
    })
}))

export default useCartStore;