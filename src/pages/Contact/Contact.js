import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('content')}>
            <h3 className={cx('title')}>contact</h3>
            <ul className={cx('location-shop')}>
                <li className={cx('item')}>Hotline: 0933782768</li>
                <li className={cx('item')}>IG: @nowsaigon</li>
                <li className={cx('item')}>FB: fb.com/nowsaigon</li>
                <li className={cx('item')}>Store I: 445 Sư Vạn Hạnh, P.12, Q.10, TP.HCM.</li>
                <li className={cx('item')}>Store II: 48 Trần Quang Diệu, P.14, Q.3, TP.HCM.</li>
                <li className={cx('item')}>Store III: 350 Điện Biên Phủ, P.17, Q. Bình Thạnh, TP.HCM.</li>
                <li className={cx('item')}>Store IV: G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình, TP.HCM.</li>
                <li className={cx('item')}>Store V: 463 Quang Trung, P.10, Q. Gò Vấp, TP.HCM.</li>
                <li className={cx('item')}>
                    Store VII: TNP (Sense Market) - Đối Diện Số 90 Lê Lai, P. Bến Nghé, Q.1, TP.HCM.
                </li>
                <li className={cx('item')}>
                    Store VIII: Cần Thơ: Shop House Vincom Xuân Khánh, PG2-08, Đường 30 tháng 4, Xuân Khánh, Cần Thơ.
                </li>
            </ul>
        </div>
    );
}

export default Contact;
