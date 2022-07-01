import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import Buttonproduct from '~/component/Model/Buttonproduct';
import Model from '~/component/Model';

const cx = classNames.bind(styles);

function ProductItem({ product, className }) {
    return (
        <div
            className={cx('wrapper', 'col', 'l-3', 'm-4', {
                [className]: className,
            })}
        >
            <div className={cx('content')}>
                <div className={cx('wrap-img')}>
                    <img src={product.imageProduct} alt="tee" />
                    <Model className={cx('show')}>
                        <Buttonproduct dataid={product.id} nameProduct={product.nameProduct} />
                    </Model>
                </div>
                <div className={cx('info')}>
                    <h3 className={cx('name')}>
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
