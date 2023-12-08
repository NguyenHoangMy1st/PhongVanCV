import axiosClient from './axiosClient';

const apiChangePass = {
    postChangePass() {
        const url = '/users/change-password';
        return axiosClient.post(url);
    },
};

export default apiChangePass;
