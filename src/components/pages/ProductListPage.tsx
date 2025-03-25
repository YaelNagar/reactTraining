import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { Grid, Stack } from "@mui/material";

const ProductListPage = () => {
    return (
        <Stack spacing={{ xs: 1, sm: 2 }}
            justifyContent={"center"}
            direction="row"
            useFlexGap
            sx={{ flexWrap: 'wrap' }}>
            {products.map((product) => (
                <Grid item key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Stack>
    );
};

export default ProductListPage;
