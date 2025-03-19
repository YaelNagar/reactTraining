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
            <DialogTitle sx={{ m: 0, p: 2, fontSize: "bold" }} id="customized-dialog-title" textAlign={'center'}>
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
                <strong>{product.name}</strong>
                <Typography gutterBottom>{product.category} </Typography>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: "black",
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>

                <Typography gutterBottom>
                    <strong>תיאור:</strong> {product.description}
                </Typography>
                <Typography gutterBottom>
                    <strong>מחיר:</strong> {product.price}
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
