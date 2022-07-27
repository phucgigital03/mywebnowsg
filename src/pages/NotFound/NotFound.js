import styles from './NotFound.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import config from '~/config';

const cx = classNames.bind(styles);

function NotFound() {
    const navigation = useNavigate();

    const handleSwitchHome = () => {
        navigation(config.routes.Home, { replace: true });
    };

    return (
        <div className={cx('wrap')}>
            <div className={cx('content-notfound')}>
                <h1 className={cx('status-error')}>404</h1>
                <h1 className={cx('title')}>Not found page</h1>
                <p className={cx('description')}>
                    URL của nội dung này đã bị thay đổi hoặc không còn tồn tại. Nếu bạn đang lưu URL này, hãy thử truy
                    cập lại từ trang chủ thay vì dùng URL đã lưu.
                </p>
                <button className={cx('btn-switch-home')} onClick={handleSwitchHome}>
                    Back HomePage
                </button>
            </div>
        </div>
    );
}

export default NotFound;
