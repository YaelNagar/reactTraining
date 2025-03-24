import { useCallback } from "react";
import useStore from "../store/store";
import Product from "../Types/Product";

const useCart = () => {
    const { cart, sum, addToCart, removeFromCart, updateQuantity, getCartSize, sendorder } = useStore();

    const handleAddToCart = useCallback((product: Product) => {
        addToCart(product);
    }, [addToCart]);

    const handleRemoveFromCart = useCallback((productId: number) => {
        removeFromCart(productId);
    }, [removeFromCart]);

    const handleUpdateQuantity = useCallback((productId: number, quantity: number) => {
        updateQuantity(productId, quantity);
    }, [updateQuantity]);

    const handleSendOrder = useCallback(() => {
        sendorder();
    }, [sendorder]);

    return {
        cart,
        sum,
        cartSize: getCartSize(),
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
        updateQuantity: handleUpdateQuantity,
        sendOrder: handleSendOrder
    };
};

export default useCart;
