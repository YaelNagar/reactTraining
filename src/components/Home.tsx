import { Box, Grid, Typography, Tab, Tabs, Badge } from '@mui/material';
import ProductList from './ProductList';
import { useMemo, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStore from '../store/store';
import Cart from './Cart';

const Home = () => {
    const { totalSum, getCartSize } = useStore();
    const [currentPage, setCurrentPage] = useState('home');
    const pageIndex = currentPage === 'home' ? 1 : 0;
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                            <Badge badgeContent={getCartSize()} color="error">
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
            {currentPage == "home" ? <ProductList /> : <Cart />}
        </Box>
    );
};

export default Home;
