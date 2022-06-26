import styles from './AllProduct.module.scss';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import ProductItem from '~/component/ProductItem';

const cx = classNames.bind(styles);

const products = [
    {
        id: 1,
        name: 'PIXEL NOWSAIGON CAP',
        price: 280000,
        img: images.tee,
    },
    {
        id: 2,
        name: 'PIXEL NOWSAIGON CAP 2',
        price: 250000,
        img: images.tee,
    },
    {
        id: 3,
        name: 'PIXEL NOWSAIGON CAP 3',
        price: 260000,
        img: images.tee,
    },
    {
        id: 4,
        name: 'PIXEL NOWSAIGON CAP 4',
        price: 270000,
        img: images.tee,
    },
    {
        id: 5,
        name: 'PIXEL NOWSAIGON CAP 5',
        price: 280000,
        img: images.tee,
    },
];

function AllProduct() {
    return (
        <div className={cx('content')}>
            <div className={cx('border-nav')}>
                <span className={cx('color-red')}></span>
            </div>
            <div className={cx('product')}>
                <div className="grid">
                    <div className="row">
                        <div className="col l-12">
                            <div className="row">
                                {products.map((product, index) => (
                                    <ProductItem key={index} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllProduct;
