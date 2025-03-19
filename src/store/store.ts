import { create } from "zustand";
import { storeState } from "../Types/StoreState";

const useStore = create<storeState>((set, get) => ({
    totalSum: 1000,
    cart: {},
    sum: 0,

    addToCart: (product) => set((state) => {
        const cartCopy = { ...state.cart };

        if (cartCopy[product.id]) {
            cartCopy[product.id].quantity += 1;
        } else {
            cartCopy[product.id] = { product, quantity: 1 };
        }

        const updatedSum = Object.values(cartCopy).reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0
        );

        return {
            cart: cartCopy,
            sum: parseFloat(updatedSum.toFixed(2))
        };
    }),

    removeFromCart: (productId) => set((state) => {
        const cartCopy = { ...state.cart };

        if (cartCopy[productId]) {
            if (cartCopy[productId].quantity > 1) {
                cartCopy[productId].quantity -= 1;
            } else {
                delete cartCopy[productId];
            }
        }

        const updatedSum = Object.values(cartCopy).reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0
        );

        return {
            cart: cartCopy,
            sum: parseFloat(updatedSum.toFixed(2))
        };
    }),
    clearCart: () => set((state) => ({
        cart: {},
        sum: 0,
        totalSum: parseFloat((state.totalSum - state.sum).toFixed(2))
    })),
    getCartSize: () => {
        const { cart } = get();
        return Object.values(cart).reduce((total, item) => total + item.quantity, 0) as number;
    }
}));

export default useStore;
