import styles from './BreadCrumb.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function BreadCrumb() {
    return (
        <div className={cx('breadcrumb')}>
            <div className={cx('inner')}>
                <ul className={cx('btn-nav')}>
                    <li className={cx('item')}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={cx('item')}>
                        <span className={cx('title')}>Allitems</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BreadCrumb;
