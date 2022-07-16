import styles from './ModelCart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

import NoCart from './NoProduct';
import HaveProduct from './HaveProduct';
import { Data, turnOffModelCart } from '~/Storage';

const cx = classNames.bind(styles);

function ModelCart() {
    const { state, dispatchWithMiddleWare } = useContext(Data);
    const { cartProduct } = state;

    const handleCloseModelCartBtn = () => {
        dispatchWithMiddleWare(turnOffModelCart());
    };

    return (
        <div className={cx('content-wrap')}>
            <button className={cx('close-model')} onClick={handleCloseModelCartBtn}>
                <FontAwesomeIcon icon={faClose} />
            </button>
            {cartProduct.length < 1 ? <NoCart /> : <HaveProduct />}
        </div>
    );
}

export default ModelCart;
