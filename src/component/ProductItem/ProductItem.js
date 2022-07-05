import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import Buttonproduct from '~/features/Model/Buttonproduct';
import Model from '~/features/Model';

const cx = classNames.bind(styles);

function ProductItem({ product, className }) {
    return (
        <div
            className={cx('wrapper', 'col', 'l-3', 'm-4', {
                [className]: className,
            })}
        >
            <div className={cx('content', 'parent-item')} data-path={product.path}>
                <div className={cx('wrap-img')}>
                    <img src={product.imageProduct} alt="tee" />
                    <Model className={cx('show')}>
                        <Buttonproduct dataid={product.id} nameProduct={product.nameProduct} path={product.path} />
                    </Model>
                </div>
                <div className={cx('info')}>
                    <h3 className={cx('name', 'name-product')}>
                        <NavLink to="/" className={cx('nav-link')}>
                            {product.nameProduct}
                        </NavLink>
                    </h3>
                    <p className={cx('price')}>{`${product.price}đ`}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
