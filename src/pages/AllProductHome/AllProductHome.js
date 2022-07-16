import styles from './AllProductHome.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useContext } from 'react';

import Products from '~/component/Products';
import { RequireAllItem } from '~/services';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = classNames.bind(styles);

function AllProductHome() {
    const [, , , , handlePath] = useContext(TranData);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const allProduct = async () => {
            const products = await RequireAllItem.getAllItemHome();
            handlePath(products[0].path);
            setProducts(products);
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

export default AllProductHome;
