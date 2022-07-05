import styles from './Tee.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { RequireTee } from '~/services';
import Products from '~/component/Products';

const cx = classNames.bind(styles);

function Tee() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const allproduct = async () => {
            const products = await RequireTee.getTee();
            setProduct(products);
        };
        allproduct();
    }, []);
    return products && <Products products={products} className={'layout'} />;
}

export default Tee;
