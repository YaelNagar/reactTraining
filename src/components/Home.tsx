import { Box, Typography, Tab, Tabs, Badge } from '@mui/material';
import ProductListPage from '@/components/pages/ProductListPage';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStore from '@/store/store';
import CartPage from '@/components/pages/CartPage';
import useCart from '@/hooks/useCart';

enum Page {
    Cart = 0,
    Home = 1,
}

const Home = () => {
    const { cartSize } = useCart();
    const { totalSum } = useStore();
    const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
    const homeIconColor = currentPage === Page.Home ? 'primary' : 'action';
    const cartIconColor = currentPage === Page.Cart ? 'primary' : 'action';

    const handleChange = (_: React.SyntheticEvent, newValue: Page) => {
        setCurrentPage(newValue);
    };

    return (
        <Box>
            <Box bgcolor="primary.main" padding={2} boxShadow={2} borderTop={3}>
                <Typography textAlign={'right'} color='white'>
                    סכום כולל: {totalSum}₪
                </Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
                <Tabs value={currentPage} onChange={handleChange} sx={{ padding: 1, paddingRight: 3 }}>
                    <Tab
                        icon={
                            <Badge badgeContent={cartSize} color="primary">
                                <ShoppingCartIcon color={cartIconColor} fontSize='small' />
                            </Badge>
                        }
                        onClick={() => setCurrentPage(Page.Cart)}
                    />
                    <Tab
                        icon={<HomeIcon color={homeIconColor} fontSize="small" />}
                        onClick={() => setCurrentPage(Page.Home)}
                    />
                </Tabs>
            </Box>
            {currentPage == Page.Home ? <ProductListPage /> : <CartPage />}
        </Box>
    );
};

export default Home;
