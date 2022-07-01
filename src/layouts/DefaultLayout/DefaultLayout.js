import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Header from '~/layouts/Component/Header';
import Footer from '~/layouts/Component/Footer';
import SideBar from '~/layouts/Component/SideBar';
import BreadCrumb from '~/component/BreadCrumb';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <BreadCrumb />
                <div className={cx('content')}>
                    <SideBar />
                    <div className={cx('component-product')}>
                        <div className={cx('category-product')}>
                            <h1 className={cx('title-address')}>Allitem</h1>
                            <div className={cx('sortpage')}>
                                <label>Sắp xếp:</label>
                                <select id="sortby" name="sortby">
                                    <option value="default">Mặc định</option>
                                    <option value="price-up">Giá tăng dần</option>
                                    <option value="price-down">Giá giảm dần</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('display-allproduct')}>{children}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
