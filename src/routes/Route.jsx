import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import {CartProvider} from '../contexts/CartContext'

const AppRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/produtos" element={<ProductList />} />
                    <Route path="product-detail/:id" element={<ProductDetail />} />
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </>
    );
};

export default AppRoutes;