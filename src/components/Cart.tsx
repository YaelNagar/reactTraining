import { Button, Snackbar, Alert, Box, LinearProgress } from "@mui/material";
import useStore from "../store/store";
import ItemInCart from "./ItemInCart";
import { useState } from "react";

const Cart = () => {
    const { cart, sum, totalSum, clearCart } = useStore();
    const cartItems = Object.values(cart);
    const [alertOpen, setAlertOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleSendOrder = () => {
        setLoading(true);
        setTimeout(() => {
            if (sum <= totalSum) clearCart();
            setLoading(false);
            setAlertOpen(true);
            setOrderPlaced(true);
        }, 1500);
    };

    return (
        <>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%' }}>
                    <LinearProgress sx={{ width: '50%' }} />
                </Box>
            ) : <>
                {sum == 0 ?
                    <Box>סל הקניות שלך ריק</Box>
                    : <Button variant="contained" onClick={handleSendOrder}>
                        הזמן {sum}₪
                    </Button>
                }

                {cartItems.map((item) => (
                    <ItemInCart key={item.product.id} product={item.product} quantity={item.quantity} />
                ))}

                {alertOpen && (
                    <Snackbar
                        open={alertOpen}
                        autoHideDuration={2000}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        onClose={() => setAlertOpen(false)}
                        TransitionComponent={(props) => <div {...props} />}
                    >
                        {sum <= totalSum ?
                            <>
                                <Alert severity="success">הזמנתך נקלטה בהצלחה</Alert>
                            </> :
                            <Alert severity="error">סכום ההזמנה גבוה מהתקציב שלך. אנא בדוק ונסה שוב</Alert>}
                    </Snackbar>
                )}</>}
        </>
    );
};

export default Cart;