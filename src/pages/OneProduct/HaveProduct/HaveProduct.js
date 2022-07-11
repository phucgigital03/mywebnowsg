import styles from './HaveProduct.module.scss';
import classNames from 'classnames/bind';

import ItemDetail from '~/component/ItemDetail';

const cx = classNames.bind(styles);

function HaveProduct({ product }) {
    return (
        <>
            <ItemDetail product={product} />
            <div className={cx('description-product')}>
                <h2>Mo ta san pham</h2>
            </div>
            <div className={cx('category')}>
                <h2>San pham cung loai</h2>
            </div>
        </>
    );
}

export default HaveProduct;
