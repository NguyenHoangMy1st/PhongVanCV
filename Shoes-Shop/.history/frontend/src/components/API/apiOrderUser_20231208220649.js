import axiosClient from './axiosClient';

const apiOrderUser = {
    getOrderByID() {
        const url = `/orders/user`;
        return axiosClient.get(url);
    },
};
export default apiOrderUser;
