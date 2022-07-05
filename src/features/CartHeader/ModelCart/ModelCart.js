import styles from './ModelCart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import NoCart from './NoProduct';
import HaveProduct from './HaveProduct';

const cx = classNames.bind(styles);

function ModelCart({ cartProduct, handleCloseModelCartBtn, handleMinusProduct, handlePlusProduct, handledeleProduct }) {
    return (
        <div className={cx('content-wrap')}>
            <button className={cx('close-model')} onClick={handleCloseModelCartBtn}>
                <FontAwesomeIcon icon={faClose} />
            </button>
            {cartProduct.length < 1 ? (
                <NoCart />
            ) : (
                <HaveProduct
                    cartProduct={cartProduct}
                    handleMinusProduct={handleMinusProduct}
                    handlePlusProduct={handlePlusProduct}
                    handledeleProduct={handledeleProduct}
                />
            )}
        </div>
    );
}

export default ModelCart;
