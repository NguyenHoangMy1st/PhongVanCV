import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './states/store';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import { CartProvider } from './api/user/CartContext';
import jwt from 'jsonwebtoken';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const { user, isAdmin } = useUser();
    const navigate = useNavigate(
    const storedJwt = sessionStorage.getItem('jwt');
    if (storedJwt) {
        try {
            const decodedToken = jwt.verify(storedJwt, 'your-secret-key');
            if (decodedToken.user && decodedToken.user.role === 'admin') {
            }
        } catch (error) {
            console.error('Invalid JWT or expired token');
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
                                // Kiểm tra xem route có thuộc về private hay public
                                if (route.isPrivate && (!user || !isAdmin)) {
                                    // Nếu route là private và người dùng chưa đăng nhập hoặc không phải là admin, chuyển hướng về trang login
                                    return <Route key={index} path={route.path} element={<navigate to="/login" />} />;
                                }
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
