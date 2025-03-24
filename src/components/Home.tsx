import { Box, Typography, Tab, Tabs, Badge } from '@mui/material';
import ProductListPage from './pages/ProductListPage';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStore from '../store/store';
import CartPage from './pages/CartPage';
import useCart from '../hooks/useCart';

const Home = () => {
    const { cartSize } = useCart();
    const { totalSum } = useStore();
    const [currentPage, setCurrentPage] = useState('home');
    const pageIndex = currentPage === 'home' ? 1 : 0;
    //const [, setValue] = useState(0);

    /*const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };*/

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setCurrentPage(newValue === 1 ? 'home' : 'cart');
    };


    const getIconColor = (page: string) => {
        return currentPage === page ? 'primary' : 'action';
    };

    return (
        <Box>
            <Box bgcolor="primary.main" padding={2} boxShadow={2} borderTop={3}>
                <Typography textAlign={'right'} color='white'>
                    סכום כולל: {totalSum}₪
                </Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
                <Tabs value={pageIndex} onChange={handleChange} sx={{ padding: 1, paddingRight: 3 }}>
                    <Tab
                        icon={
                            <Badge badgeContent={cartSize} color="primary">
                                <ShoppingCartIcon color={getIconColor('cart')} fontSize='small' />
                            </Badge>
                        }
                        onClick={() => setCurrentPage('cart')}
                    />
                    <Tab
                        icon={<HomeIcon color={getIconColor('home')} fontSize="small" />}
                        onClick={() => setCurrentPage('home')}
                    />
                </Tabs>
            </Box>
            {currentPage == "home" ? <ProductListPage /> : <CartPage />}
        </Box>
    );
};

export default Home;
