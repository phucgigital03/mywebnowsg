import styles from './CartHeader.module.scss';
import classNames from 'classnames/bind';
import TippyHead from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faClose, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { memo, useEffect } from 'react';

import Popper from '~/component/Popper';
import Button from '~/component/Button';
import images from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CartHeader({ productId }) {
    const [manyproduct, setManyproduct] = useState(0);
    const [products, setProducts] = useState([2]);

    useEffect(() => {
        if (!productId) {
            console.log(1);
            return;
        }
    }, [productId]);

    useEffect(() => {
        if (!manyproduct) {
            console.log(1);
            return;
        }
        console.log(2);
    }, [manyproduct]);

    const handlePlusProduct = () => {
        setManyproduct((valueproduct) => valueproduct + 1);
    };

    const handleMinusProduct = () => {
        setManyproduct((valueproduct) => {
            if (valueproduct === 1) {
                return 1;
            }
            return valueproduct - 1;
        });
    };

    return (
        <TippyHead
            // visible
            interactive
            placement="bottom-end"
            delay={[0, 500]}
            offset={[0, 10]}
            render={(attrs) => (
                <div className={cx('box-popper')} tabIndex="-1" {...attrs}>
                    <Popper>
                        {products.length < 1 ? (
                            <p className={cx('no-product')}>you dont have product</p>
                        ) : (
                            <div className={cx('have-product')}>
                                <ul className={cx('list-product')}>
                                    <li>
                                        <div className={cx('wrap-img')}>
                                            <img src={images.tee} alt="tee" />
                                        </div>
                                        <div className={cx('info-product')}>
                                            <div className={cx('title-product')}>
                                                <h3 className={cx('product-name')}>
                                                    <a href="/">PIXEL NOWSAIGON CAP</a>
                                                </h3>
                                                <button className={cx('dele-pro')}>
                                                    <FontAwesomeIcon icon={faClose} />
                                                </button>
                                            </div>
                                            <p className={cx('price')}>280000 vnd</p>
                                            <div className={cx('many-product')}>
                                                <button className={cx('btn')} onClick={handleMinusProduct}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <input
                                                    className={cx('many-input')}
                                                    type="text"
                                                    value={manyproduct || 1}
                                                    onChange={() => {}}
                                                />
                                                <button className={cx('btn')} onClick={handlePlusProduct}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className={cx('sum-price')}>
                                    <p className={cx('sum-price--text')}>Tổng tiền tạm tính:</p>
                                    <span className={cx('sum-price-number')}>280000 vnd</span>
                                </div>
                                <Button large primary to="/">
                                    TIẾN HÀNH THANH TOÁN
                                </Button>
                            </div>
                        )}
                    </Popper>
                </div>
            )}
        >
            <div className={cx('cart')}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className={cx('many')}>0</span>
            </div>
        </TippyHead>
    );
}

export default memo(CartHeader);
