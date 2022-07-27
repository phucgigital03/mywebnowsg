import styles from './Pants.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect, useContext } from 'react';

import { RequirePants } from '~/services/ui';
import Products from '~/component/Products';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = classNames.bind(styles);

function Pants() {
    const [products, setProduct] = useState([]);
    const { handlePath, handleReloadBreadCrumb } = useContext(TranData);

    useEffect(() => {
        const allproduct = async () => {
            const products = await RequirePants.getPants();
            handlePath(products[0].path);
            handleReloadBreadCrumb(products[0].path);
            setProduct(products);
        };
        allproduct();
    }, []);
    return products && <Products products={products} className={'layout'} />;
}

export default Pants;
