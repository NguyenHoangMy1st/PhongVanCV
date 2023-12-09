import Header from '../../components/Layout/Header';
import BrandList from '../../components/BrandList';
import ProductGridList from '../../components/ProductGridList';
import ProductFeaturedCard from '../../components/ProductFeaturedCard';
import { useCart } from '../../contexts/CartContext';
import { useEffect, useState } from 'react';
import apiGuestProduct from '~/components/API/apiGuestProduct';
import apiProductGrid from '~/components/API/apiProductGrid';

export default function ProductPage() {
    const { cartItems } = useCart();
    const [valueSearch, setValueSearch] = useState('');
    const [products, setProducts] = useState();
    const [productSearch, setProductSearch] = useState();
    console.log(valueSearch);
    const fetchData = async () => {
        const response = await apiProductGrid.getAllProduct();
        setProducts(response?.data?.content);
    };
    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setValueSearch(searchValue);
        console.log('Searching for:', searchValue);
    };
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        const filteredProducts =
            products?.length > 0 &&
            products?.filter((product) => {
                const title = product.title.toLowerCase();
                return title.includes(valueSearch.toLowerCase());
            });
        setProductSearch(filteredProducts);
    }, [products, valueSearch]);

    return (
        <>
            <Header cartItems={cartItems} />
            <div className="header-search-container container-layout">
                <input
                    type="text"
                    name="search"
                    className="search-field"
                    placeholder="Enter your product name..."
                    value={valueSearch}
                    onChange={handleSearchChange}
                    autoComplete="off"
                />
                <button className="search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
            <BrandList />
            <ProductGridList productSearch={productSearch} />
        </>
    );
}
