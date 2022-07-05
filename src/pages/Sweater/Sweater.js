import styles from './Sweater.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { RequireSweater } from '~/services';
import Products from '~/component/Products';

const cx = classNames.bind(styles);

function Sweater() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const allproduct = async () => {
            const products = await RequireSweater.getSweater();
            setProduct(products);
        };
        allproduct();
    }, []);
    return products && <Products products={products} className={'layout'} />;
}

export default Sweater;
