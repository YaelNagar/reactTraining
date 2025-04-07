import { Box, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Typography } from "@mui/material";
import { Delete as DeleteIcon, Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import useCart from "@/hooks/useCart";
import { Product } from "@/types/Product";

interface ItemInCartProps {
    product: Product;
    quantity: number;
}

const ItemsInCart = ({ product, quantity }: ItemInCartProps) => {
    const { removeFromCart, updateQuantity } = useCart();

    const decrease = () => {
        if (quantity > 1) {
            updateQuantity(product.id, quantity - 1);
        } else {
            removeFromCart(product.id);
        }
    }

    const increase = () => {
        updateQuantity(product.id, quantity + 1)
    }

    return (
        <Box>
            <ListItem
                sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <ListItemAvatar>
                    <Avatar src={product.image} alt={product.name} />
                </ListItemAvatar>

                <ListItemText
                    primary={product.name}
                    secondary={
                        <Typography variant="body2" color="text.secondary">
                            {product.price} ₪
                        </Typography>
                    }
                    sx={{ textAlign: "right", flexGrow: 1 }}
                />

                <IconButton
                    onClick={increase}
                    sx={{ color: 'green' }}
                >
                    <AddIcon />
                </IconButton>

                <Typography>{quantity}</Typography>

                <IconButton
                    onClick={decrease}
                    sx={{ color: 'orange' }}
                >
                    <RemoveIcon />
                </IconButton>

                <IconButton onClick={() => removeFromCart(product.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
            </ListItem>
        </Box>
    );
}

export default ItemsInCart;