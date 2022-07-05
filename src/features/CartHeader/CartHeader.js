import styles from './CartHeader.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { memo, useContext } from 'react';

import { Data } from '~/component/Storage';
import { plusProduct, minusProduct, deleProduct, closeModelProductCart, turnOffModelCart } from '~/component/Storage';
import ModelCart from './ModelCart';

const cx = classNames.bind(styles);

function getIndAndManyProduct(event) {
    const parentInputMany = event.target.closest('.parent');
    const inputMany = parentInputMany.querySelector('.input-value');
    const btnPlus = event.target.closest('.plus');
    const index = Number(btnPlus.dataset.id);
    const valueMany = Number(inputMany.value) + 1;
    return [index, valueMany];
}

function getIndandInpManyProduct(event) {
    const parentInputMany = event.target.closest('.parent');
    const inputMany = parentInputMany.querySelector('.input-value');
    const btnMinus = event.target.closest('.minus');
    const index = Number(btnMinus.dataset.id);
    return [index, inputMany];
}

function CartHeader() {
    const [state, dispatch] = useContext(Data);
    const { cartProduct, display } = state;

    const handlePlusProduct = (event) => {
        const [index, valueMany] = getIndAndManyProduct(event);
        dispatch(plusProduct(index, valueMany));
    };

    const handleMinusProduct = (event) => {
        let valueMany;
        const [index, inputMany] = getIndandInpManyProduct(event);
        if (Number(inputMany.value) !== 1) {
            valueMany = Number(inputMany.value) - 1;
            dispatch(minusProduct(index, valueMany));
        }
    };

    const handledeleProduct = (e) => {
        const btnDele = e.target.closest(`.dele-product`);
        const index = btnDele.dataset.id;
        dispatch(deleProduct(index));
    };

    const handleCloseModelCart = (e) => {
        const inputCart = e.target;
        const checked = inputCart.checked;
        dispatch(closeModelProductCart(checked));
    };

    const handleCloseModelCartBtn = () => {
        dispatch(turnOffModelCart());
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
            {display && (
                <label className={cx('show-cart')}>
                    <div
                        onClick={handleDefaultCart}
                        className={cx('layout', {
                            ['animation-cart']: display,
                        })}
                    >
                        <ModelCart
                            cartProduct={cartProduct}
                            handleCloseModelCartBtn={handleCloseModelCartBtn}
                            handleMinusProduct={handleMinusProduct}
                            handlePlusProduct={handlePlusProduct}
                            handledeleProduct={handledeleProduct}
                        />
                    </div>
                </label>
            )}
        </div>
    );
}

export default memo(CartHeader);
