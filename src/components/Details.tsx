import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton,
    Typography,
    Box,
    CardMedia
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from "@/types/Product";

interface DetailsProps {
    product: Product;
    onClose: () => void
}

const Details = ({ product, onClose }: DetailsProps) => {
    return (
        <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open dir='rtl'>


            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    color: "black"
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogTitle sx={{ m: 0, p: 2, fontSize: "bold" }} id="customized-dialog-title" textAlign={'center'}>
                <Typography fontWeight="bold">{product.name}</Typography>
                <Typography gutterBottom>{product.category} </Typography>
            </DialogTitle>

            <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CardMedia
                        component="img"
                        width="200rem"
                        height="200rem"
                        image={product.image}
                        alt={product.name}
                        sx={{
                            objectFit: "cover",
                            borderTopLeftRadius: "0.5rem",
                            borderRadius: "0.5rem",
                        }}
                    />
                </Box>
                <Box>
                    <Typography><Typography component="span" fontWeight="bold">תיאור:</Typography> {product.description}</Typography>
                    <Typography><Typography component="span" fontWeight="bold">מחיר:</Typography> {product.price}₪</Typography>
                </Box>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="text" color="primary">
                    סגור
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Details;
