import axios from 'axios';

const apiRegister = {
    postRegister(data) {
        const url = 'https://pbl6-shoes-shop-production-5c16.up.railway.app/auth/signup';
        return axios.post(url, data);
    },
};
export default apiRegister;
