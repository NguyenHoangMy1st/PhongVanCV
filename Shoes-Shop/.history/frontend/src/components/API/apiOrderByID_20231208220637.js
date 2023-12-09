import axiosClient from './axiosClient';

const apiOrderByID = {
    getOrderByID() {
        const url = `/orders/user`;
        return axiosClient.get(url);
    },
};
export default apiOrderByID;
