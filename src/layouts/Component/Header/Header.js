import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import TippyHead from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

import images from '~/assets/images';
import Popper from '~/component/Popper';
import config from '~/config';
import CartHeader from '~/component/CartHeader';

const cx = classNames.bind(styles);

const nodenav = [
    {
        title: 'ALL ITEMS',
        path: config.routes.Home,
    },
    {
        title: 'TEE',
        path: config.routes.Tee,
    },
    {
        title: 'BOTTOM',
        path: config.routes.Bottom,
    },
    {
        title: 'JACKET',
        path: config.routes.Jacket,
    },
    {
        title: 'HOODIE',
        path: config.routes.Hoodie,
    },
    {
        title: 'SWEATER',
        path: config.routes.Sweater,
    },
    {
        title: 'CAP',
        path: config.routes.Cap,
    },
    {
        title: 'SALE',
        path: config.routes.Sale,
    },
];

function Header() {
    console.log('render');
    return (
        <header className={cx('wrapper')}>
            <div className={cx('account')}>
                <div className={cx('inner')}>
                    <div className={cx('hot-line')}>
                        <span className={cx('title')}>
                            Hotline:
                            <a className={cx('phone')} href="tel:0399.158.631">
                                039.9158.631
                            </a>
                        </span>
                    </div>
                    <ul className={cx('menu-btn')}>
                        <li className={cx('item')}>
                            <a href="/" className={cx('link')}>
                                Đăng nhập
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="/" className={cx('link')}>
                                Đăng ký
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="/" className={cx('link')}>
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('img')}>
                <div className={cx('img-inner')}>
                    <a href="/">
                        <img src={images.logo} alt="logo" />
                    </a>
                </div>
            </div>
            <div className={cx('menu-nav')}>
                <div className={cx('menu-nav-inner')}>
                    <ul className={cx('list-btn')}>
                        <li className={cx('btn-items')}>
                            <a href="/" className={cx('nav-link')}>
                                HOME
                            </a>
                        </li>
                        <span>
                            <TippyHead
                                // visible
                                interactive
                                placement="bottom"
                                delay={[0, 500]}
                                offset={[44, 10]}
                                render={(attrs) => (
                                    <div className={cx('box-popper')} tabIndex="-1" {...attrs}>
                                        <Popper>
                                            <ul className={cx('menu-nav-list')}>
                                                {nodenav.map((node, index) => (
                                                    <li key={index} className={cx('items-nav')}>
                                                        <NavLink className={cx('item-clo-link')} to={node.path}>
                                                            {node.title}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Popper>
                                    </div>
                                )}
                            >
                                <li className={cx('btn-items')}>
                                    <a href="/" className={cx('nav-link')}>
                                        CLOTHING
                                        <span className={cx('arrow-down')}>
                                            <FontAwesomeIcon icon={faSortDown} />
                                        </span>
                                    </a>
                                </li>
                            </TippyHead>
                        </span>
                        <li className={cx('btn-items')}>
                            <a href="/" className={cx('nav-link')}>
                                CONTACT
                            </a>
                        </li>
                        <li className={cx('btn-items', 'sale')}>
                            <a href="/" className={cx('nav-link')}>
                                CLEARANCE SALE
                            </a>
                        </li>
                    </ul>
                    <div className={cx('feature-header')}>
                        <div className={cx('search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <CartHeader />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
