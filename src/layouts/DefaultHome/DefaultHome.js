import styles from './DefaultHome.module.scss';
import classNames from 'classnames/bind';

import Header from '~/layouts/Component/Header';
import Footer from '~/layouts/Component/Footer';

const cx = classNames.bind(styles);

function DefaultHome({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultHome;
