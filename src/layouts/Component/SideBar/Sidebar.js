import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';

const cx = classNames.bind(styles);

const stringnodenavs = ['Allitem', 'Pants', 'Sweater', 'Tee', 'Bottom', 'Hoodie', 'Jacket', 'Cap', 'Sale'];

function SideBar() {
    return (
        <nav className={cx('menu-nav')}>
            <h2 className={cx('title')}>DANH MỤC SẢN PHẨM</h2>
            <ul className={cx('list-nav')}>
                {stringnodenavs.map((stringnodenav, index) => {
                    return (
                        <li key={index} className={cx('item-nav')}>
                            <Link
                                data-path={config.routes[stringnodenav]}
                                className={cx('link-nav')}
                                to={config.routes[stringnodenav]}
                            >
                                {stringnodenav}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default SideBar;
