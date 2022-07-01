import styles from './Products.module.scss';
import classNames from 'classnames/bind';

import ProductItem from '~/component/ProductItem';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Products({ products, className }) {
    return (
        <div className={cx('product')}>
            <div className="grid">
                <div className="row">
                    <div className="col l-12">
                        <div className="row">
                            {products.map((product, index) => (
                                <ProductItem key={index} product={product} className={className} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Products);
