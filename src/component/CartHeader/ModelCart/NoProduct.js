import styles from './ModelCart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NoCart() {
    return <p className={cx('no-product')}>you dont have product</p>;
}

export default NoCart;
