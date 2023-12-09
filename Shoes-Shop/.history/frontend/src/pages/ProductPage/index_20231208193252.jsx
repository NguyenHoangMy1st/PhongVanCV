import Header from '../../components/Layout/Header';
import BrandList from '../../components/BrandList';
import ProductGridList from '../../components/ProductGridList';
import ProductFeaturedCard from '../../components/ProductFeaturedCard';
import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';
import apiGuestProduct from '~/components/API/apiGuestProduct';

export default function ProductPage() {
    const { cartItems } = useCart();
    const [valueSearch, setValueSearch] = useState();
    const [products, setProducts] = useState();
    const fetchData = async () => {
        const response = await apiGuestProduct.getAllProduct();
        setProducts(response.data);
    };
    useF
    return (
        <>
            <Header cartItems={cartItems} />
            <div className="header-search-container container-layout">
                <input
                    type="search"
                    name="search"
                    className="search-field"
                    placeholder="Enter your product name..."
                    // onChange={}
                />
                <button className="search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
            <BrandList />
            <ProductGridList />
        </>
    );
}
