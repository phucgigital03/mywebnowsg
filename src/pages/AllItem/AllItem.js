import styles from './AllItem.module.scss';
import className from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import Products from '~/component/Products';
import { RequireAllItem } from '~/services/ui';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = className.bind(styles);

function Allitem() {
    const { handlePath, handleReloadBreadCrumb } = useContext(TranData);
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const allproduct = async () => {
            const products = await RequireAllItem.getAllItem();
            handlePath(products[0].path);
            handleReloadBreadCrumb(products[0].path);
            setProduct(products);
        };
        allproduct();
    }, []);
    return products && <Products products={products} className={'layout'} />;
}

export default Allitem;
