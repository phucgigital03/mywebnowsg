import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import Header from '~/layouts/Component/Header';
import Footer from '~/layouts/Component/Footer';
import SideBar from '~/layouts/Component/SideBar';
import BreadCrumb from '~/features/BreadCrumb';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [, , , , , path] = useContext(TranData);
    const [pathname, setPathName] = useState('');

    useEffect(() => {
        if (path.length > 1) {
            setPathName(path);
            return;
        }
        const pathWindow = window.location.pathname;
        setPathName(pathWindow);
    }, [path]);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <BreadCrumb />
                <div className={cx('content')}>
                    <SideBar />
                    <div className={cx('component-product')}>
                        <div className={cx('category-product')}>
                            <h1 className={cx('title-address')}>{pathname}</h1>
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
