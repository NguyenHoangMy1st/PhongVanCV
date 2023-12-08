import axiosClient from './axiosClient';

const apiChangePass = {
    postBuyNow() {
        const url = '/users/change-password';
        return axiosClient.post(url);
    },
};

export default apiChangePass;
