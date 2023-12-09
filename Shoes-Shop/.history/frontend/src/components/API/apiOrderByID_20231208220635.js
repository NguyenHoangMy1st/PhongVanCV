import axiosClient from './axiosClient';

const apiOrderByID = {
    getOrderByID(id) {
        const url = `/orders/user`;
        return axiosClient.get(url);
    },
};
export default apiOrderByID;
