import styles from './ModelCart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from '~/component/Button';

const cx = classNames.bind(styles);

function HaveProduct({ cartProduct, handleMinusProduct, handlePlusProduct, handledeleProduct }) {
    console.log(cartProduct);
    return (
        <div className={cx('have-product')}>
            <ul className={cx('list-product')}>
                {cartProduct.map((stateitem, index) => (
                    <li key={index}>
                        <div className={cx('wrap-img')}>
                            <img src={stateitem.imageProduct} alt="tee" />
                        </div>
                        <div className={cx('info-product')}>
                            <div className={cx('title-product')}>
                                <h3 className={cx('product-name')}>
                                    <a href="/">{stateitem.nameProduct}</a>
                                </h3>
                                <button
                                    className={cx('dele-pro', 'dele-product')}
                                    data-id={index}
                                    onClick={handledeleProduct}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                            <div className={cx('layout-item')}>
                                <div className={cx('description-pro')}>
                                    <p className={cx('price')}>{`${stateitem.price} vnd`}</p>
                                    <p className={cx('color-product')}>{`color: ${stateitem.colorProduct}`}</p>
                                    <p className={cx('size-product')}>{`size: ${stateitem.sizeProduct}`}</p>
                                </div>
                                <div className={cx('many-product', 'parent')}>
                                    <button className={cx('btn', 'minus')} data-id={index} onClick={handleMinusProduct}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <input
                                        className={cx('many-input', 'input-value')}
                                        type="text"
                                        value={stateitem.manyProduct}
                                        onChange={() => {}}
                                    />
                                    <button className={cx('btn', 'plus')} data-id={index} onClick={handlePlusProduct}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={cx('sum-price')}>
                <p className={cx('sum-price--text')}>Tổng tiền tạm tính:</p>
                <span className={cx('sum-price-number')}>280000 vnd</span>
            </div>
            <Button large primary to="/">
                TIẾN HÀNH THANH TOÁN
            </Button>
        </div>
    );
}

export default HaveProduct;
