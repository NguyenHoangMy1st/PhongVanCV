import React from 'react';
import apiCart from '../API/apiCart';

export default function Payment({ orderId, totalPrice, paymentTime, transactionId, isSuccess }) {
  
    const fetchCarts = async () => {
        try {
            const response = await apiCart.getAllCart();
            setProducts(response.data);
        } catch (error) {
            console.error(error?.message);
        }
    };
    // API cart
    useEffect(() => {
        // Gọi hàm fetchCarts
        fetchCarts();
    }, []);
    return (
        <div>
            <div className="container">
                <div className="w-50 m-auto">
                    <h1 className={`my-3 text-${isSuccess ? 'success' : 'danger'} text-center`}>
                        {isSuccess ? 'Thanh toán thành công' : 'Thanh toán thất bại'}
                    </h1>
                    <h2 className="my-2">Chi tiết đơn hàng</h2>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Thông tin đơn hàng:</td>
                                <td>
                                    <span>{orderId}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Tổng tiền:</td>
                                <td>
                                    <span>{totalPrice}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Thời gian thanh toán:</td>
                                <td>
                                    <span>{paymentTime}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Mã giao dịch:</td>
                                <td>
                                    <span>{transactionId}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/" className="btn btn-primary">
                        Về trang chủ
                    </a>
                </div>
            </div>
        </div>
    );
}