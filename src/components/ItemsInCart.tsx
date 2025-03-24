import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ItemInCartProps } from "../Types/ItemInCartProps";
import useCart from "../hooks/useCart";

const ItemsInCart = ({ product, quantity }: ItemInCartProps) => {
    const { removeFromCart, updateQuantity } = useCart();

    return (
        <Box>
            <List>
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
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        sx={{ color: 'green' }}
                    >
                        <AddIcon />
                    </IconButton>

                    <Typography>{quantity}</Typography>

                    <IconButton
                        onClick={() => {
                            if (quantity > 1) {
                                updateQuantity(product.id, quantity - 1);
                            } else {
                                removeFromCart(product.id);
                            }
                        }}
                        sx={{ color: 'orange' }}
                    >
                        <RemoveIcon />
                    </IconButton>

                    <IconButton onClick={() => removeFromCart(product.id)}>
                        <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default ItemsInCart;