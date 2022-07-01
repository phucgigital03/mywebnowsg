import styles from './ListImage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ListImage({ product }) {
    return (
        <ul className={cx('show-product')}>
            <li className={cx('list-img')}>
                <img src={product.imageProduct} alt="ao" />
            </li>
            <li className={cx('list-img')}>
                <img src={product.imageProduct} alt="ao" />
            </li>
            <li className={cx('list-img')}>
                <img src={product.imageProduct} alt="ao" />
            </li>
            <li className={cx('list-img')}>
                <img src={product.imageProduct} alt="ao" />
            </li>
        </ul>
    );
}

export default ListImage;
