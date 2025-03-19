import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { Box, Grid } from "@mui/material";

const ProductList = () => {
    return (
        <>
            <Grid container spacing={2} justifyContent="center" sx={{ flexWrap: "wrap", padding: "0 25px" }}>
                {products.map((product) => (
                    <Grid item key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProductList;
