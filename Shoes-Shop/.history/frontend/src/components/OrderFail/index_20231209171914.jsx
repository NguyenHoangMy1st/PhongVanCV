import React from 'react';

export default function OrderFail() {
    return <div><div class="container">
        <div class="w-50 m-auto">
            <h1 class="my-3 text-danger text-center">Thanh toán thất bại</h1>
            <h2 class="my-2">Chi tiết đơn hàng</h2>
            <!-- Sử dụng lớp "table" và "table-bordered" để tạo ra bảng hiển thị thông tin chi tiết đơn hàng -->
            <table class="table table-bordered">
                <tbody>
                <tr>
                    <td>Thông tin đơn hàng:</td>
                    <td><span th:text="${orderId}">[order ID]</span></td>
                </tr>
                <tr>
                    <td>Tổng tiền:</td>
                    <td><span th:text="${totalPrice}">[total price]</span></td>
                </tr>
                <tr>
                    <td>Thời gian thanh toán:</td>
                    <td><span th:text="${paymentTime}">[payment time]</span></td>
                </tr>
                <tr>
                    <td>Mã giao dịch:</td>
                    <td><span th:text="${transactionId}">[transaction ID]</span></td>
                </tr>
                </tbody>
            </table>
            <a href="/" class="btn btn-primary">Về trang chủ</a>
        </div>
    </div>
</div>
}
