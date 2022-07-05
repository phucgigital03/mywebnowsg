import styles from './LayoutProductDetail.module.scss';
import classNames from 'classnames/bind';

import Header from '~/layouts/Component/Header';
import Footer from '~/layouts/Component/Footer';
import BreadCrumb from '~/features/BreadCrumb';

const cx = classNames.bind(styles);

function LayoutProductDetail({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <BreadCrumb />
                <div className={cx('content-item')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default LayoutProductDetail;
