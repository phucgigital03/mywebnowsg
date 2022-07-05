import styles from './AllItem.module.scss';
import className from 'classnames/bind';
import { useEffect, useState } from 'react';

import Products from '~/component/Products';
import { RequireAllItem } from '~/services';

const cx = className.bind(styles);

function Allitem() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const allproduct = async () => {
            const products = await RequireAllItem.getAllItem();
            setProduct(products);
        };
        allproduct();
    }, []);
    return products && <Products products={products} className={'layout'} />;
}

export default Allitem;
