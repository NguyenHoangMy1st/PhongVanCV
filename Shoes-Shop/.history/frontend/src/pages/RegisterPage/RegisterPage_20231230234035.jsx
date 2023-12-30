import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import apiRegister from '~/api/user/apiRegister';

const cx = classNames.bind(styles);
const RegisterPage = () => {
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const validatePassword = (password) => {
        // Biểu thức chính quy kiểm tra mật khẩu
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return passwordRegex.test(password);
    };
    const validateEmail = (email) => {
        // Biểu thức chính quy kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async () => {
        if (!password || !lastName || !firstName || !phone || !email) {
            toast.warning('Vui lòng nhập đủ thông tin yêu cầu');
            return;
        }
        // Kiểm tra định dạng email
        if (!validateEmail(email)) {
            toast.warning('Vui lòng nhập đúng định dạng email');
            return;
        }
        // Kiểm tra mật khẩu
        if (!validatePassword(password)) {
            toast.warning('Mật khẩu phải có 8 ký tự bao gồm 1 số, 1 chữ hoa, 1 ký tự đặc biệt');
            return;
        }
        if (phone.length !== 10) {
            toast.warning('Số điện thoại không hợp lệ');
            return;
        }
        const nameRegex = /^[a-zA-ZÀ-Ỹà-ỹ ]+$/;
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            toast.warning('Họ và Tên chỉ được chứa chữ cái và không có số hoặc ký tự đặc biệt');
            return;
        }
        try {
            const formData = {
                password,
                lastName,
                firstName,
                mobile: phone,
                email,
                role: 'user',
            };
            const response = await apiRegister.postRegister(formData);
            if (response.status === 201) {
                toast.success('Đăng ký thành công');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            }
            if (response.status === 500) {
                toast.error("Please check User ");
            }
        } catch (error) {
            toast.error(error?.message);
        }
    };

    return (
        <div className={`${cx('register-control')} ${cx('body-register')}`}>
            <ToastContainer />
            <div className={cx('wrapper-register')}>
                <div className={`${cx('form-box')} ${cx('register')}`}>
                    <h2>Register</h2>
                    <form>
                        <div className={cx('input-register')}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                autoComplete="off"
                            />
                            <label>Email</label>
                        </div>
                        <div className={cx('input-register')}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                autoComplete="off"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            <label>Password</label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ background: 'transparent' }}
                                className={cx('toggle-password-button')}
                            >
                                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className={cx('input-register')}>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                autoComplete="off"
                                onChange={(event) => setLastName(event.target.value)}
                                required
                            />
                            <label>Last name</label>
                        </div>
                        <div className={cx('input-register')}>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                autoComplete="off"
                                onChange={(event) => setFirstName(event.target.value)}
                                required
                            />
                            <label>First name</label>
                        </div>
                        <div className={cx('input-register')}>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={phone}
                                autoComplete="off"
                                onChange={(event) => setPhone(event.target.value)}
                                required
                            />
                            <label>Phone Number</label>
                        </div>
                        <button className={cx('btn-register')} type="button" onClick={handleSubmit} id="btn-login">
                            REGISTER
                        </button>
                        <div className={cx('login-register')}>
                            <p>
                                If you already have an Account?
                                <Link to="/login" className={cx('login-link')}>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
