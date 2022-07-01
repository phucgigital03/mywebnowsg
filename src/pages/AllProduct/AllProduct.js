import styles from './AllProduct.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import Products from '~/component/Products';
import { requireAllProduct } from '~/services';

const cx = classNames.bind(styles);

function AllProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const allProduct = async () => {
            const allproduct = await requireAllProduct.getProduct();
            setProducts(allproduct);
        };
        allProduct();
    }, []);

    return (
        products && (
            <div className={cx('content')}>
                <div className={cx('border-nav')}>
                    <span className={cx('color-red')}></span>
                </div>
                <Products products={products} />
            </div>
        )
    );
}

export default AllProduct;
