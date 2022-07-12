import styles from './ItemDetail.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, memo, useContext } from 'react';

import Button from '~/component/Button';
import InputColor from './InputColor';
import InputSize from './InputSize';
import { Data } from '~/Storage';
import { addProduct } from '~/Storage/';
import ListImage from './ListImage';

const cx = classnames.bind(styles);

function createObjProduct(nameRef, priceRef, imageRef, manyRef, valueColor, valueSize) {
    const nameProduct = nameRef.current.innerText;
    const price = Number(priceRef.current.innerText.split(' ')[0]);
    const imageProduct = imageRef.current.src;
    const manyProduct = Number(manyRef.current.value);
    const colorProduct = valueColor;
    const sizeProduct = valueSize;
    const objCreateProduct = {
        nameProduct,
        price,
        imageProduct,
        manyProduct,
        colorProduct,
        sizeProduct,
    };
    return objCreateProduct;
}

function ItemDetail({ product, handleCloseModel }) {
    const [, dispatch] = useContext(Data);
    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const manyRef = useRef();
    const [valueColor, setValueColor] = useState('white');
    const [indexInpColor, setIndexInpColor] = useState(0);
    const [valueSize, setValueSize] = useState('S');
    const [indexInpSize, setIndexInpSize] = useState(0);
    const [manyProduct, setManyProduct] = useState(1);

    const handleGetIndexColor = (e) => {
        const index = Number(e.target.dataset.id);
        setValueColor(product[0].color[index]);
        setIndexInpColor(index);
    };

    const handleGetIndexSize = (e) => {
        const index = Number(e.target.dataset.id);
        setValueSize(product[0].size[index]);
        setIndexInpSize(index);
    };

    const handlePlusMany = () => {
        setManyProduct((manyProduct) => (manyProduct += 1));
    };

    const handleMinusMany = () => {
        setManyProduct((manyProduct) => {
            if (manyProduct === 1) {
                return 1;
            } else {
                return (manyProduct -= 1);
            }
        });
    };

    const handleAddProduct = () => {
        const objCreateProduct = createObjProduct(nameRef, priceRef, imageRef, manyRef, valueColor, valueSize);
        dispatch(addProduct(objCreateProduct));
        if (handleCloseModel) {
            handleCloseModel();
        }
    };

    return (
        <div className={cx('watch-fast')}>
            <div className="row">
                <div className="col l-5">
                    <div className={cx('all-img')}>
                        <div className={cx('wrap-img')}>
                            <a href="/" className={cx('link-pro')}>
                                <img ref={imageRef} src={product[0].imageProduct} alt="ao" />
                            </a>
                        </div>
                        <ListImage product={product[0]} />
                    </div>
                </div>
                <div className="col l-7">
                    <div className={cx('info-item')}>
                        <h3 className={cx('name-product')}>
                            <a ref={nameRef} href="/" className={cx('name-link')}>
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
                        <span ref={priceRef} className={cx('price')}>
                            {`${product[0].price} đ`}
                        </span>
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
                            <Button primary medium onClick={handleAddProduct}>
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
