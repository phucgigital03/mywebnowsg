import styles from './ItemDetail.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '~/component/Button';
import InputColor from './InputColor';
import InputSize from './InputSize';
import ListImage from './ListImage';
import { addProductApi, patchProductApi } from '~/featureRedux/MiddleWare/CartProduct.js';

const cx = classnames.bind(styles);

const createObjProduct = (manyRef, valueColor, valueSize, product) => {
    const manyProduct = Number(manyRef.current.value);
    const color = valueColor;
    const size = valueSize;
    const price = manyProduct * product.price;
    const productid = Math.round(Math.random() * 1000 + Math.random() * 100 + Math.random() * 10 + Math.random() * 1);
    delete product.id;
    const objCreateProduct = {
        ...product,
        manyProduct,
        color,
        size,
        price,
        productid,
    };
    return objCreateProduct;
};

const calculatePriceOld = (cartProducts, indexUpdate) => {
    const priceProductOld = Math.round(cartProducts[indexUpdate].price / cartProducts[indexUpdate].manyProduct);
    return priceProductOld;
};

const updatePriceAndMany = (cartProducts, payload, indexUpdate) => {
    const priceProductOld = calculatePriceOld(cartProducts, indexUpdate);
    const manyProduct = payload.manyProduct + cartProducts[indexUpdate].manyProduct;
    const price = manyProduct * priceProductOld;
    return {
        price,
        manyProduct,
    };
};

const checkProductSame = (cartProducts, payload) => {
    let id;
    let indexUpdate;
    if (cartProducts.length === 0) {
        return false;
    }
    const isbool = cartProducts.some((product, index) => {
        id = product.id;
        indexUpdate = index;
        return (
            product.nameProduct === payload.nameProduct &&
            product.color === payload.color &&
            product.size === payload.size
        );
    });
    return { isbool, id, indexUpdate };
};

function ItemDetail({ product, handleCloseModel }) {
    const cartProducts = useSelector((state) => state.CartProducts.cartProducts);
    const dispatch = useDispatch();
    const manyRef = useRef();
    const [valueColor, setValueColor] = useState(product[0].color[0]);
    const [indexInpColor, setIndexInpColor] = useState(0);
    const [valueSize, setValueSize] = useState(product[0].size[0]);
    const [indexInpSize, setIndexInpSize] = useState(0);
    const [manyProduct, setManyProduct] = useState(1);

    const handleGetIndexColor = (e) => {
        const index = Number(e.target.dataset.id);
        setIndexInpColor(index);
        setValueColor(product[0].color[index]);
    };

    const handleGetIndexSize = (e) => {
        const index = Number(e.target.dataset.id);
        setValueSize(product[0].size[index]);
        setIndexInpSize(index);
    };

    const handlePlusMany = () => {
        setManyProduct((manyProduct) => {
            if (Number.isInteger(manyProduct)) {
                return (manyProduct += 1);
            }
        });
    };

    const handleMinusMany = () => {
        setManyProduct((manyProduct) => {
            if (Number.isInteger(manyProduct)) {
                if (manyProduct === 1) {
                    return 1;
                } else {
                    return (manyProduct -= 1);
                }
            }
        });
    };

    // handle add and patch product
    const handleAddorPatch = () => {
        const objCreateProduct = createObjProduct(manyRef, valueColor, valueSize, product[0]);
        const { isbool, id, indexUpdate } = checkProductSame(cartProducts, objCreateProduct);

        if (isbool) {
            const dataPatch = updatePriceAndMany(cartProducts, objCreateProduct, indexUpdate);
            dispatch(patchProductApi([indexUpdate, id, dataPatch]));
        } else {
            dispatch(addProductApi(objCreateProduct));
        }

        if (handleCloseModel) {
            handleCloseModel();
        }
    };

    return (
        <div data-id={product[0].id} className={cx('watch-fast')}>
            <div className="row">
                <div className="col l-5">
                    <div className={cx('all-img')}>
                        <div className={cx('wrap-img')}>
                            <a href="/" className={cx('link-pro')}>
                                <img src={product[0].imageProduct} alt="ao" />
                            </a>
                        </div>
                        <ListImage product={product[0]} />
                    </div>
                </div>
                <div className="col l-7">
                    <div className={cx('info-item')}>
                        <h3 className={cx('name-product')}>
                            <a href="/" className={cx('name-link')}>
                                {product[0].nameProduct}
                            </a>
                        </h3>
                        <div className={cx('wrap-brand')}>
                            <p className={cx('brand-product')}>
                                Thương hiệu:
                                <a href="/">NEEDS OF WISDOM®</a>
                            </p>
                            <p className={cx('stock-prod')}>
                                Trạng thái:
                                <span>Còn hàng</span>
                            </p>
                        </div>
                        <span className={cx('price')}>{`${product[0].price} đ`}</span>
                        <div className={cx('descrition')}>
                            <p>NEEDS OF WISDOM® / Streetwear / Based in Saigon / Made in Vietnam</p>
                            <a href="/">Xem chi tiết</a>
                        </div>
                        <div className={cx('watch-size')}>
                            <h3>Size:</h3>
                            {product[0].size.map((size, index) => {
                                return (
                                    <InputSize
                                        dataid={index}
                                        onChange={handleGetIndexSize}
                                        key={index}
                                        value={size}
                                        checked={index === indexInpSize ? true : false}
                                    >
                                        {size}
                                    </InputSize>
                                );
                            })}
                        </div>
                        <div className={cx('watch-color')}>
                            <h3>Màu sắc:</h3>
                            {product[0].color.map((color, index) => {
                                return (
                                    <InputColor
                                        dataid={index}
                                        onChange={handleGetIndexColor}
                                        key={index}
                                        value={color}
                                        checked={index === indexInpColor ? true : false}
                                    />
                                );
                            })}
                        </div>
                        <div className={cx('manyandbtn')}>
                            <div className={cx('many')}>
                                <input ref={manyRef} type="text" value={manyProduct} onChange={() => {}} />
                                <div className={cx('wrap-btn')}>
                                    <button className={cx('btn')} onClick={handleMinusMany}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <button className={cx('btn')}>
                                        <FontAwesomeIcon icon={faPlus} onClick={handlePlusMany} />
                                    </button>
                                </div>
                            </div>
                            <Button primary medium onClick={handleAddorPatch}>
                                THÊM VÀO GIỎ HÀNG
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ItemDetail);
