import Header from '../../components/Layout/Header';
import BrandList from '../../components/BrandList';
import ProductGridList from '../../components/ProductGridList';
import ProductFeaturedCard from '../../components/ProductFeaturedCard';
import { useCart } from '../../contexts/CartContext';
import { useEffect, useState } from 'react';
import apiGuestProduct from '~/components/API/apiGuestProduct';

export default function ProductPage() {
    const { cartItems } = useCart();
    const [valueSearch, setValueSearch] = useState();
    const [products, setProducts] = useState();
    console.log(valueSearch);
    const fetchData = async () => {
        const response = await apiGuestProduct.getAllProduct();
        setProducts(response.data);
    };
    const handleSearchChange = (e) => {
        // Lấy giá trị từ trường nhập liệu
        const searchValue = e.target.value;
        // Cập nhật state valueSearch
        setValueSearch(searchValue);

        // Thực hiện các thao tác tìm kiếm hoặc truy vấn API ở đây
        console.log('Searching for:', searchValue);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <Header cartItems={cartItems} />
            <div className="header-search-container container-layout">
                <input
                    type="search"
                    name="search"
                    className="search-field"
                    placeholder="Enter your product name..."
                    value={valueSearch}
                    onChange={handleSearchChange}
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
