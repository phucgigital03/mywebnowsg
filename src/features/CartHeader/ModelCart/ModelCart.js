import styles from './ModelCart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import NoCart from './NoProduct';
import HaveProduct from './HaveProduct';
import { turnOffModelCart } from '~/featureRedux/Action/CartProduct';

const cx = classNames.bind(styles);

function ModelCart() {
    const cartProducts = useSelector((state) => state.CartProducts.cartProducts);
    const dispatch = useDispatch();

    const handleCloseModelCartBtn = () => {
        // console.log('render');
        // e.preventDefault();
        dispatch(turnOffModelCart());
    };

    return (
        <div className={cx('content-wrap')}>
            <button className={cx('close-model')} onClick={handleCloseModelCartBtn}>
                <FontAwesomeIcon icon={faClose} />
            </button>
            {cartProducts.length < 1 ? <NoCart /> : <HaveProduct />}
        </div>
    );
}

export default ModelCart;
