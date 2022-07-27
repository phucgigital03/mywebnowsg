import styles from './ModelProduct.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

import ItemDetail from '~/component/ItemDetail';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = classNames.bind(styles);

function ModelProduct() {
    const { product, handleCloseModel } = useContext(TranData);
    return (
        <div className={cx('layout-show')}>
            <div className={cx('content')}>
                <ItemDetail product={product} handleCloseModel={handleCloseModel} />
                <button className={cx('close')} onClick={handleCloseModel}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
        </div>
    );
}

export default ModelProduct;
