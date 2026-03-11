import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';

const AppRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/produtos" element={<ProductList />} />
                <Route path="product-detail/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default AppRoutes;