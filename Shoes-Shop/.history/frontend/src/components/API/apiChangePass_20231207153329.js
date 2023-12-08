
import axiosClient from './axiosClient';

const apiChangePass = {
    postBuyNow() {
        const url = `/payment/submitOrder?orderInfo=thanh toan`;
        return axiosClient.post(url);
    },
};

export default apiChangePass;
