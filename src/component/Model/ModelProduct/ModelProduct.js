import styles from './ModelProduct.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import ItemDetail from '~/component/ItemDetail';

const cx = classNames.bind(styles);

function ModelProduct({ product, onClick }) {
    return (
        <div className={cx('layout-show')}>
            <div className={cx('content')}>
                {product.length > 0 && <ItemDetail product={product} handleCloseModel={onClick} />}
                <button className={cx('close')} onClick={onClick}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
        </div>
    );
}

export default ModelProduct;
