import styles from './NoProduct.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import config from '~/config';

const cx = classNames.bind(styles);

function NoProduct() {
    const navigtion = useNavigate();

    const handleSwitchHome = () => {
        navigtion(config.routes.Home);
    };
    return (
        <div className={cx('content')}>
            <h1 className={cx('title')}>Lỗi không tìm thấy trang</h1>
            <p className={cx('description')}>
                Xin lỗi, chúng tôi không tìm thấy kết quả nào phù hợp. Xin vui lòng quay lại trang chủ
            </p>
            <button className={cx('btn-switch-page')} onClick={handleSwitchHome}>
                Về trang chủ
            </button>
        </div>
    );
}

export default NoProduct;
