import styles from './OneProduct.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import ItemDetail from '~/component/ItemDetail';
import { TranData } from '~/component/FeatureModel/FeatureModel';
import { requireAllProduct } from '~/services';

const cx = classNames.bind(styles);

function OneProduct() {
    const [indexIdSwitch] = useContext(TranData);
    const [product, setProduct] = useState([]);

    // call api reload page
    useEffect(() => {
        if (indexIdSwitch) {
            return;
        }
        const filterProduct = async () => {
            const pathApi = window.location.pathname;
            const indexId = pathApi.slice(pathApi.length - 1, pathApi.length);
            const products = await requireAllProduct.filterProduct(indexId);
            setProduct(products);
        };
        filterProduct();
    }, []);

    // call api when click choose
    useEffect(() => {
        if (!indexIdSwitch) {
            return;
        }
        const filterProduct = async () => {
            const product = await requireAllProduct.filterProduct(indexIdSwitch);
            setProduct(product);
        };
        filterProduct();
    }, [indexIdSwitch]);

    return (
        <div className={cx('one-product')}>
            {product.length > 0 && <ItemDetail product={product} />}
            <div className={cx('description-product')}>
                <h2>Mo ta san pham</h2>
            </div>
            <div className={cx('category')}>
                <h2>San pham cung loai</h2>
            </div>
        </div>
    );
}

export default OneProduct;
