import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './states/store';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import { CartProvider } from './api/user/CartContext';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const storedJwt = sessionStorage.getItem('jwt');
    if (storedJwt) {
        try {
            const decodedToken = jwt.verify(storedJwt, 'your-secret-key'); // Thay thế 'your-secret-key' bằng khóa bí mật thực sự
            // Lưu thông tin người dùng trong trạng thái hoặc context
            // Ví dụ: setUser(decodedToken.user);

            // Kiểm tra xem có trường role và có giá trị là "admin" không
            if (decodedToken.user && decodedToken.user.role === 'admin') {
                // Ghi nhận rằng người dùng là admin trong trạng thái hoặc context
                // Ví dụ: setAdmin(true);
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
