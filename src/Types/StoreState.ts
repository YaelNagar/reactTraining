import { CartItem } from "./CartItem";
import Product from "./Product";

export interface storeState {
    totalSum: number;
    cart: { [id: number]: CartItem };
    sum: number;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    sendorder: () => void;
    getCartSize: () => number;
    updateQuantity: (productId: number, newQuantity: number) => void;
}
