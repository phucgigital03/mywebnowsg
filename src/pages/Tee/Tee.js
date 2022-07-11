import styles from './Tee.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect, useContext } from 'react';

import { RequireTee } from '~/services';
import Products from '~/component/Products';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = classNames.bind(styles);

function Tee() {
    const [products, setProduct] = useState([]);
    const [, , , , handlePath, , handleReloadBreadCrumb] = useContext(TranData);
    useEffect(() => {
        const allproduct = async () => {
            const products = await RequireTee.getTee();
            handlePath(products[0].path);
            handleReloadBreadCrumb(products[0].path);
            setProduct(products);
        };
        allproduct();
    }, []);
    return products && <Products products={products} className={'layout'} />;
}

export default Tee;
