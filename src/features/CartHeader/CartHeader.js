import styles from './CartHeader.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { memo, useContext } from 'react';

import { Data } from '~/Storage';
import { closeModelProductCart } from '~/Storage';
import ModelCart from './ModelCart';

const cx = classNames.bind(styles);

function CartHeader() {
    const { state, dispatchWithMiddleWare } = useContext(Data);
    const { cartProduct, display } = state;

    const handleCloseModelCart = (e) => {
        const inputCart = e.target;
        const checked = inputCart.checked;
        dispatchWithMiddleWare(closeModelProductCart(checked));
    };

    const handleDefaultCart = (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('cart')}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className={cx('many')}>{cartProduct.length}</span>
            <input
                type="checkbox"
                id="show-cart"
                name="show-cart"
                className={cx('input-cart')}
                checked={display ? true : false}
                onChange={handleCloseModelCart}
            />
            <label className={cx('show-cart')}>
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
