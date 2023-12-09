import React from 'react';

export default function Payment() {
    return (
        <div>
            <div className="container">
                <div className="w-50 m-auto">
                    <h1 className="my-3 text-danger text-center">Thanh toán thất bại</h1>
                    <h2 className="my-2">Chi tiết đơn hàng</h2>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Thông tin đơn hàng:</td>
                                <td>
                                    <span>{/* Replace th:text with curly braces for dynamic values */}1</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Tổng tiền:</td>
                                <td>
                                    <span>{/* Replace th:text with curly braces for dynamic values */}3000</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Thời gian thanh toán:</td>
                                <td>
                                    <span>{/* Replace th:text with curly braces for dynamic values */}{paymentTime}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Mã giao dịch:</td>
                                <td>
                                    <span>{/* Replace th:text with curly braces for dynamic values */}{transactionId}</span>
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
