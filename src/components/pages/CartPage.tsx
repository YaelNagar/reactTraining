import { Button, Box, LinearProgress } from "@mui/material";
import useStore from "@/store/store";
import ItemInCart from "@/components/ItemsInCart";
import { useState, useEffect } from "react";
import AlertMessage from "@/components/AlertMessage";
import useCart from "@/hooks/useCart";

const CartPage = () => {
    const { totalSum } = useStore();
    const { sum, sendOrder, cartSize, cartItems } = useCart();
    const [alertOpen, setAlertOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingValue, setLoadingValue] = useState<number>(0);

    useEffect(() => {
        if (loading) {
            const processOrder = async () => {
                for (let i = 0; i < cartSize; i++) {
                    sendOrder();
                    setLoadingValue((prev) => prev + 100 / cartSize);
                    //setIndex(i + 1);
                    await new Promise((resolve) => setTimeout(resolve, 500));
                }

                setTimeout(() => {
                    setLoading(false);
                    setAlertOpen(true);
                }, 500);
            };

            processOrder();
        }
    }, [loading]);

    const handleSendOrder = () => {
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
                        sx={{ width: '30rem', height: '0.25rem' }}
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