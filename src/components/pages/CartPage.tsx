import { Button, Box, LinearProgress } from "@mui/material";
import useStore from "../../store/store";
import ItemInCart from "../ItemsInCart";
import { useState, useEffect } from "react";
import AlertMessage from "../AlertMessage";
import useCart from "../../hooks/useCart";

const CartPage = () => {
    const { totalSum } = useStore();
    const { cart, sum, sendOrder, cartSize } = useCart();
    const cartItems = Object.values(cart);
    const [alertOpen, setAlertOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingValue, setLoadingValue] = useState(0);

    useEffect(() => {
        if (loading) {
            let index = 0;
            const interval = setInterval(() => {
                index++;
                sendOrder();
                setLoadingValue((prev) => prev + 100 / cartSize);

                if (index >= cartSize) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLoading(false);
                        setAlertOpen(true);
                    }, 500);
                }
            }, 500);
        }
    }, [loading]);

    const handleSendOrder = () => {
        debugger
        if (sum <= totalSum) {
            setLoading(true);
            setLoadingValue(0);
        }
        else {
            setAlertOpen(true);
            setTimeout(() => {
                setAlertOpen(false);
            }, 2500);
        }
    };

    return (
        <>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", width: '100%' }}>
                    <LinearProgress
                        variant="determinate"
                        value={loadingValue}
                        sx={{ width: '300px', height: '8px' }}
                    />
                </Box>
            ) : (
                <>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {sum === 0 ? (
                            <Box>סל הקניות שלך ריק</Box>
                        ) : (
                            <Button variant="contained" onClick={handleSendOrder} >
                                הזמן {sum}₪
                            </Button>
                        )}</Box>

                    {alertOpen && (
                        sum <= totalSum ? (
                            <AlertMessage message="הזמנתך נקלטה בהצלחה" severityType="success" />
                        ) : (
                            <AlertMessage message="סכום ההזמנה גבוה מהתקציב שלך. אנא בדוק ונסה שוב" severityType="error" />
                        )
                    )}
                </>
            )}

            {cartItems.map((item) => (
                <ItemInCart key={item.product.id} product={item.product} quantity={item.quantity} />
            ))}
        </>
    );
};

export default CartPage;