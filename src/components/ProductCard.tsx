import React, { useState } from "react";
import { ProductProps } from "../Types/ProductProps";
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box, Alert, Snackbar } from "@mui/material";
import { Info, ShoppingCart } from '@mui/icons-material';
import useStore from "../store/store";
import Details from "./Details";

const ProductCard = (props: ProductProps) => {
    const { addToCart } = useStore();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [showPlusOne, setShowPlusOne] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    const handleAddToCart = () => {
        addToCart(props.product);
        setShowPlusOne(true);
        setAlertOpen(true);

        setTimeout(() => {
            setShowPlusOne(false);
        }, 1500);

        setTimeout(() => {
            setAlertOpen(false);
        }, 2000);
    };

    return (
        <>
            <Card sx={{ width: "100%", maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="120"
                    image={props.product.image}
                    alt={props.product.name}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent>
                    <Typography gutterBottom component="div">
                        {props.product.name}
                    </Typography>
                    <Typography gutterBottom component="div" sx={{ color: 'gray' }}>
                        {props.product.price}₪
                    </Typography>
                    <Grid container justifyContent={"space-between"} sx={{ marginTop: 5 }}>
                        <Button
                            size="small"
                            variant="contained"
                            startIcon={<Info />}
                            sx={{ backgroundColor: 'purple' }}
                            onClick={() => setDialogOpen(true)}
                        >
                            פרטים
                        </Button>
                        <Box sx={{ position: "relative", display: "inline-block" }}>
                            <Button variant="contained" startIcon={<ShoppingCart />} onClick={handleAddToCart} size="small">
                                הוסף לעגלה
                            </Button>
                            {showPlusOne && (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, 0)",
                                        color: "purple",
                                        borderRadius: "50%",
                                        width: 30,
                                        height: 30,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        animation: "floatUpDown 1.5s ease-in-out forwards",
                                    }}
                                >
                                    +1
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </CardContent>

                {dialogOpen && <Details product={props.product} onClose={() => setDialogOpen(false)} />}

                <style>
                    {`
                    @keyframes floatUpDown {
                        0% { opacity: 1; transform: translate(-50%, 0); }
                        30% { opacity: 1; transform: translate(-50%, -30px); } 
                        100% { opacity: 0; transform: translate(-50%, 0); } 
                    }
                `}
                </style>
            </Card>

            <Snackbar
                open={alertOpen}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => setAlertOpen(false)}
            >
                <Alert severity="success">פריט נוסף בהצלחה</Alert>
            </Snackbar>
        </>
    );
};

export default ProductCard;
