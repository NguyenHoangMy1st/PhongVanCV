import axiosClient from './axiosClient';

const apiOrder = {
    getOrderByID() {
        const url = `/orders/user`;
        return axiosClient.get(url);
    },
};
export default apiOrderByID;
