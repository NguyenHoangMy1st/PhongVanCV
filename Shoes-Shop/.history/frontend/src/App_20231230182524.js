import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './states/store';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import { CartProvider } from './api/user/CartContext';
import jwt from 'jsonwebtoken';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const storedJwt = sessionStorage.getItem('jwt');
    if (storedJwt) {
        try {
            const decodedToken = jwt.verify(storedJwt, 'your-secret-key');
            if (decodedToken.user && decodedToken.user.role === 'admin') {
            }
        } catch (error) {
            console.error('Invalid JWT or expired token');
            // Xử lý khi JWT không hợp lệ hoặc hết hạn
        }
    }
    return (
        <Router>
            <Provider store={store}>
                <CartProvider>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = Fragment;
                                if (route.layout) {
                                    Layout = route.layout;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </CartProvider>
            </Provider>
        </Router>
    );
}

export default App;
