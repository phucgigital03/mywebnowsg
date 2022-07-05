import styles from './Pants.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { RequirePants } from '~/services';
import Products from '~/component/Products';

const cx = classNames.bind(styles);

function Pants() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const allproduct = async () => {
            const products = await RequirePants.getPants();
            setProduct(products);
        };
        allproduct();
    }, []);
    return products && <Products products={products} className={'layout'} />;
}

export default Pants;
