import styles from './Sweater.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect, useContext } from 'react';

import { RequireSweater } from '~/services/ui';
import Products from '~/component/Products';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = classNames.bind(styles);

function Sweater() {
    const [products, setProduct] = useState([]);
    const { handlePath, handleReloadBreadCrumb } = useContext(TranData);

    useEffect(() => {
        const allproduct = async () => {
            const products = await RequireSweater.getSweater();
            handlePath(products[0].path);
            handleReloadBreadCrumb(products[0].path);
            setProduct(products);
        };
        allproduct();
    }, []);
    return products && <Products products={products} className={'layout'} />;
}

export default Sweater;
