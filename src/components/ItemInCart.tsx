import { ProductProps } from "../Types/ProductProps";
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import useStore from "../store/store";
import Product from "../Types/Product";

interface ItemInCartProps {
    product: Product;
    quantity: number;
}

const ItemInCart = ({ product, quantity }: ItemInCartProps) => {
    const { removeFromCart } = useStore();
    return (
        <Box>
            <List>
                <ListItem
                    sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                    }}

                >
                    <ListItemAvatar>
                        <Avatar src={product.image} alt={product.name} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={`${product.name}  (${quantity})`}
                        sx={{ textAlign: "right", marginRight: 2 }}
                    />
                    <IconButton onClick={() => removeFromCart(product.id)}>
                        <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default ItemInCart;
