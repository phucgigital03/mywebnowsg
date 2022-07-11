import styles from './OneProduct.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import ItemDetail from '~/component/ItemDetail';
import { TranData } from '~/features/FeatureModel/FeatureModel';
import { RequirefilterProduct } from '~/services';

const cx = classNames.bind(styles);

function OneProduct() {
    const [product, setProduct] = useState([]);
    const [indexIdSwitch, , , , , path, handleReloadBreadCrumb] = useContext(TranData);

    useEffect(() => {
        let indexId;
        let pathName;
        if (indexIdSwitch) {
            indexId = indexIdSwitch;
            pathName = path;
        } else {
            const pathApi = window.location.pathname;
            const headerPath = pathApi.split('-')[0];
            const pathResult = headerPath.slice(2, headerPath.length);
            const indexPath = pathApi.slice(pathApi.length - 1, pathApi.length);
            indexId = indexPath;
            pathName = pathResult;
        }
        const filterProduct = async () => {
            let idtimer;
            const product = await new Promise(async (resolve, reject) => {
                const product = await RequirefilterProduct.filterProduct(pathName, indexId);
                idtimer = setTimeout(() => {
                    resolve(product);
                }, 1000);
            });
            clearTimeout(idtimer);
            setProduct((prevProduct) => {
                console.log(prevProduct);
                if (product.length === 0) {
                    return [...prevProduct];
                } else {
                    handleReloadBreadCrumb(product[0].path, product[0].nameProduct);
                    return product;
                }
            });
        };
        filterProduct();
    }, []);

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
