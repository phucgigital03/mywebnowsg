import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '~/layouts/Component/Header';
import Footer from '~/layouts/Component/Footer';
import SideBar from '~/layouts/Component/SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;