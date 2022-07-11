import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import TippyHead from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { memo, useContext, useState } from 'react';

import images from '~/assets/images';
import Popper from '~/component/Popper';
import config from '~/config';
import CartHeader from '~/features/CartHeader';
import { SignIn, Register } from '~/features/Form';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = classNames.bind(styles);

const nodenav = [
    {
        title: 'ALL ITEMS',
        path: config.routes.Allitem,
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
    const [, , , , , , handleReloadBreadCrumb] = useContext(TranData);
    const [displayRegister, setDisplayRegister] = useState(false);
    const [displaySignIn, setDisplaySignIn] = useState(false);

    const handleDisplayRegister = () => {
        setDisplayRegister(!displayRegister);
    };

    const handleDisplaySignIn = () => {
        setDisplaySignIn(!displaySignIn);
    };

    // Form is SignIn or Register
    const handleSwitchModelForm = () => {
        setDisplayRegister(!displayRegister);
        setDisplaySignIn(!displaySignIn);
    };

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
                            <span className={cx('link')} onClick={handleDisplaySignIn}>
                                Đăng nhập
                            </span>
                            {displaySignIn && (
                                <SignIn
                                    handleDisplaySignIn={handleDisplaySignIn}
                                    handleSwitchModelForm={handleSwitchModelForm}
                                />
                            )}
                        </li>
                        <li className={cx('item')}>
                            <span className={cx('link')} onClick={handleDisplayRegister}>
                                Đăng ký
                            </span>
                            {displayRegister && (
                                <Register
                                    handleDisplayRegister={handleDisplayRegister}
                                    handleSwitchModelForm={handleSwitchModelForm}
                                />
                            )}
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
                            <Link to={config.routes.Home} className={cx('nav-link')}>
                                HOME
                            </Link>
                        </li>
                        <span>
                            <TippyHead
                                // visible
                                interactive
                                placement="bottom"
                                delay={[0, 500]}
                                offset={[44, 0]}
                                render={(attrs) => (
                                    <div className={cx('box-popper')} tabIndex="-1" {...attrs}>
                                        <Popper>
                                            <ul className={cx('menu-nav-list')}>
                                                {nodenav.map((node, index) => (
                                                    <li key={index} className={cx('items-nav')}>
                                                        <Link
                                                            data-path={node.path}
                                                            className={cx('item-clo-link')}
                                                            to={node.path}
                                                        >
                                                            {node.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Popper>
                                    </div>
                                )}
                            >
                                <li className={cx('btn-items')}>
                                    <Link
                                        data-path={config.routes.Allitem}
                                        to={config.routes.Allitem}
                                        className={cx('nav-link')}
                                    >
                                        CLOTHING
                                        <span className={cx('arrow-down')}>
                                            <FontAwesomeIcon icon={faSortDown} />
                                        </span>
                                    </Link>
                                </li>
                            </TippyHead>
                        </span>
                        <li className={cx('btn-items')}>
                            <Link
                                data-path={config.routes.Contact}
                                onClick={() => {
                                    handleReloadBreadCrumb(config.routes.Contact);
                                }}
                                to={config.routes.Contact}
                                className={cx('nav-link')}
                            >
                                CONTACT
                            </Link>
                        </li>
                        <li className={cx('btn-items', 'sale')}>
                            <Link to={config.routes.Home} className={cx('nav-link')}>
                                CLEARANCE SALE
                            </Link>
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
