import { useState } from "react";
import { Card, CardContent, Typography, CardMedia, Button, Box, Stack } from "@mui/material";
import { Info, ShoppingCart } from '@mui/icons-material';
import Details from "@/components/Details";
import AlertMessage from "@/components/AlertMessage";
import PlusOne from "@/components/PlusOne";
import useCart from "@/hooks/useCart";
import { Product } from "@/types/Product";

const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [showPlusOne, setShowPlusOne] = useState<boolean>(false);
    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const handleAddToCart = () => {
        addToCart(product);
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
            <Card sx={{ width: 250 }}>
                <CardMedia
                    component="img"
                    height="120rem"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <Typography gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'gray' }}>
                            {product.price}₪
                        </Typography>
                    </Box>
                    <Stack justifyContent={"space-between"} direction="row" useFlexGap sx={{ marginTop: 5 }}>
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
                                <PlusOne />
                            )}
                        </Box>
                    </Stack>
                </CardContent>

                {dialogOpen && <Details product={product} onClose={() => setDialogOpen(false)} />}

            </Card>

            {alertOpen && <AlertMessage message="פריט נוסף בהצלחה" severityType="success" />}
        </>
    );
};

export default ProductCard;
