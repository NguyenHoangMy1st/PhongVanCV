import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import './style.scss';
import apiOrderUser from '../API/apiOrderUser';

export default function OrderUser() {
    const [userOrders, setUserOrders] = useState([]);
    console.log(userOrders);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Assuming apiOrderByID.getOrderByID(id) returns a promise
                const response = await apiOrderUser.getOrderUser();

                // Assuming the response.data contains the relevant order information
                setUserOrders(response.data);
            } catch (error) {
                console.error('Error fetching order data:', error);
                // Handle the error, e.g., show a toast error message
            }
        };

        fetchData(); // Call fetchData when the component mounts
    }, []);
    return (
        <div>
            <TableContainer component={Paper} variant="outlined" className="custom-table-container container-layout">
                <Table aria-label="demo table" className="custom-table">
                    <TableHead>
                        <TableRow className="custom-header">
                            <TableCell className="custom-header-order-user">Title</TableCell>
                            <TableCell className="custom-header-order-user">Email</TableCell>
                            <TableCell className="custom-header-order-user">Address</TableCell>
                            <TableCell className="custom-header-order-user">Order Date</TableCell>
                            <TableCell className="custom-header-order-user">ToTal Price</TableCell>
                            <TableCell className="custom-header-order-user">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userOrders.length > 0 &&
                            userOrders.map((order) => (
                                <TableRow key={order.id} className="custom-cell">
                                    <TableCell align="left" scope="row" className="custom-cell-order">
                                        <span className="custom-cell-order-title">{order?.order?.product?.title}</span>
                                    </TableCell>
                                    <TableCell align="left" className="custom-cell-order-user">
                                        {order?.user?.email}
                                    </TableCell>
                                    <TableCell align="left" className="custom-cell-order-user">
                                        {`${order.addresses?.streetAddress} ${order?.addresses?.city}`}
                                    </TableCell>
                                    <TableCell align="left" className="custom-cell-order-user">
                                        {order.orderDate}
                                    </TableCell>
                                    <TableCell align="left" className="custom-cell-order-user">
                                        {order.totalPrice}
                                    </TableCell>
                                    <TableCell align="left" className="custom-cell-order-user">
                                        <span className="custom-status">{order.orderStatus}</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
