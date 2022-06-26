import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('wrap-content')}>
                <div className="row">
                    <div className="col l-12">
                        <div className="row">
                            <div className={cx('col', 'l-2', 'offset-l')}>
                                <div className={cx('edi-span')}>
                                    <h4>
                                        <span>FOLLOW US</span>
                                    </h4>
                                    <div className={cx('social-icon')}>
                                        <a href="/" className={cx('social-link')}>
                                            <FontAwesomeIcon icon={faFacebookSquare} />
                                        </a>
                                        <a href="/" className={cx('social-link')}>
                                            <FontAwesomeIcon icon={faInstagramSquare} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-2">
                                <div className={cx('edi-span')}>
                                    <h4>
                                        <span>HƯỚNG DẪN</span>
                                    </h4>
                                    <ul className={cx('rules')}>
                                        <li className={cx('rules-list')}>
                                            <a href="/" className={cx('rule-link')}>
                                                Điều khoản
                                            </a>
                                        </li>
                                        <li className={cx('rules-list')}>
                                            <a href="/" className={cx('rule-link')}>
                                                Hướng dẫn mua hàng
                                            </a>
                                        </li>
                                        <li className={cx('rules-list')}>
                                            <a href="/" className={cx('rule-link')}>
                                                Chính sách đổi trả hàng
                                            </a>
                                        </li>
                                        <li className={cx('rules-list')}>
                                            <a href="/" className={cx('rule-link')}>
                                                Bảo mật thông tin KH
                                            </a>
                                        </li>
                                        <li className={cx('rules-list')}>
                                            <a href="/" className={cx('rule-link')}>
                                                Chính sách thanh toán
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className={cx('edi-span')}>
                                    <h4>
                                        <span>FOLLOW US</span>
                                    </h4>
                                    <ul className={cx('location')}>
                                        <li className={cx('loca-list')}>
                                            <span>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            Store I: 445 Sư Vạn Hạnh, P.12, Q.10.
                                        </li>
                                        <li className={cx('loca-list')}>
                                            <span>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            Store II: 48 Trần Quang Diệu, P.14, Q.3, TP.HCM
                                        </li>
                                        <li className={cx('loca-list')}>
                                            <span>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            Store III: 463 Quang Trung, P.10, Q.Gò Vấp, TP.HCM
                                        </li>
                                        <li className={cx('loca-list')}>
                                            <span>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            Store IV: G-Town 1, 350 Điện Biên Phủ, P.17, Q.Bình Thạnh, TP.HCM
                                        </li>
                                        <li className={cx('loca-list')}>
                                            <span>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            Store V: G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình, TP.HCM
                                        </li>
                                        <li className={cx('loca-list')}>
                                            <span>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            Store VI: TNP 26LTT - 26 Lý Tự Trọng, P.Bến Nghé, Q.1, TP.HCM
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
