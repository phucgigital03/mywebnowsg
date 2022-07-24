import styles from './CartHeader.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModelCart from './ModelCart';
import { closeModelProductCart } from '~/featureRedux/Action/CartProduct';

const cx = classNames.bind(styles);

function CartHeader() {
    const { cartProducts, display } = useSelector((state) => state.CartProducts);
    const dispatch = useDispatch();

    const handleCloseModelCart = (e) => {
        const inputCart = e.target;
        const checked = inputCart.checked;
        // console.log(checked);
        dispatch(closeModelProductCart(checked));
    };

    const handleDefaultCart = (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('cart')}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className={cx('many')}>{cartProducts.length}</span>
            <input
                type="checkbox"
                id="show-cart"
                name="show-cart"
                className={cx('input-cart')}
                checked={display ? true : false}
                onChange={handleCloseModelCart}
            />
            <label htmlFor="show-cart" className={cx('show-cart')}>
                <div
                    onClick={handleDefaultCart}
                    className={cx('layout', {
                        ['animation-cart']: display,
                    })}
                >
                    <ModelCart />
                </div>
            </label>
        </div>
    );
}

export default memo(CartHeader);
