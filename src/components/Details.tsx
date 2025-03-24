import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton,
    Typography,
    Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ProductProps } from '../Types/ProductProps';

const Details = ({ product, onClose }: ProductProps & { onClose: () => void }) => {
    return (
        <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open dir='rtl'>

            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "black"
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogTitle sx={{ m: 0, p: 2, fontSize: "bold" }} id="customized-dialog-title" textAlign={'center'}>
                <strong>{product.name}</strong>
                <Typography gutterBottom>{product.category} </Typography>
            </DialogTitle>
            <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Box
                    sx={{
                        width: 500,
                        height: 200,
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                    }}
                />
                <Typography gutterBottom={true} component="div">
                    <div><strong>תיאור:</strong> {product.description}</div>
                    <div><strong>מחיר:</strong> {product.price}₪</div>
                </Typography>
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
