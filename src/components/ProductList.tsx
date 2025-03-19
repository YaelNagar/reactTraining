import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const ProductList = () => {
    return (
        <>
            <Grid container spacing={2} justifyContent={"center"}>
                {products.map((product) => (
                    <Grid spacing={2} item xs={12} sm={6} md={4} lg={3} xl={2.005} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProductList;
