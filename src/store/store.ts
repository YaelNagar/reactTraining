import { create } from "zustand";
import { storeState } from "../Types/StoreState";
import Product from "../Types/Product";

const calculateSum = (cart: { [id: number]: { product: Product, quantity: number } }) => {
    return Object.values(cart).reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );
};

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

        const updatedSum = calculateSum(cartCopy);

        return {
            cart: cartCopy,
            sum: parseFloat(updatedSum.toFixed(2))
        };
    }),

    removeFromCart: (productId) => set((state) => {
        const cartCopy = { ...state.cart };

        delete cartCopy[productId];

        const updatedSum = calculateSum(cartCopy);

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
    },

    updateQuantity: (productId: number, newQuantity: number) =>
        set((state) => {
            const updatedCart = {
                ...state.cart,
                [productId]: {
                    ...state.cart[productId],
                    quantity: newQuantity,
                },
            };

            const updatedSum = calculateSum(updatedCart);

            return {
                cart: updatedCart,
                sum: parseFloat(updatedSum.toFixed(2))
            };
        }),


}));

export default useStore;
