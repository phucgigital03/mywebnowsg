import styles from './OneProduct.module.scss';
import classNames from 'classnames/bind';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import HaveProduct from './HaveProduct';
import NoProduct from './NoProduct';
import Model from '~/features/Model';
import { TranData } from '~/features/FeatureModel/FeatureModel';
import { RequirefilterProduct } from '~/services';

const cx = classNames.bind(styles);

function OneProduct() {
    const [indexIdSwitch, , , , , path, handleReloadBreadCrumb] = useContext(TranData);
    const [product, setProduct] = useState([]);
    const [showModel, setShowModel] = useState(false);

    const getPathIndexIDurl = useCallback(() => {
        const pathApi = window.location.pathname;
        const headerPath = pathApi.split('-')[0];
        const pathResult = headerPath.slice(2, headerPath.length);
        const indexPath = pathApi.slice(pathApi.length - 1, pathApi.length);
        return [indexPath, pathResult];
    }, []);

    useEffect(() => {
        let indexId;
        let pathName;

        if (indexIdSwitch) {
            indexId = indexIdSwitch;
            pathName = path;
        } else {
            const [indexPath, pathResult] = getPathIndexIDurl();
            indexId = indexPath;
            pathName = pathResult;
        }

        const filterProduct = async () => {
            let idtimer;
            setShowModel(true);

            const product = await new Promise(async (resolve, reject) => {
                const product = await RequirefilterProduct.filterProduct(pathName, indexId);
                idtimer = setTimeout(() => {
                    resolve(product);
                }, 1000);
            });

            clearTimeout(idtimer);
            if (product.length !== 0) {
                handleReloadBreadCrumb(product[0].path, product[0].nameProduct);
            } else {
                handleReloadBreadCrumb('Not found Page');
            }
            setProduct(product);
            setShowModel(false);
        };
        filterProduct();
    }, []);

    return (
        <div className={cx('one-product')}>
            {product.length === 0 ? <NoProduct /> : <HaveProduct product={product} />}
            {showModel && (
                <Model className={cx('position')}>
                    <div className={cx('wrap-icon-loading')}>
                        <span className={cx('icon-loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </span>
                    </div>
                </Model>
            )}
        </div>
    );
}

export default OneProduct;
