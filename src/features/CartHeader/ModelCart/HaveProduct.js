import styles from './ModelCart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import Button from '~/component/Button';
import { deleProductApi, patchProductApi } from '~/featureRedux/MiddleWare/CartProduct';

const cx = classNames.bind(styles);

const calculatePriceOld = (cartProduct, index) => {
    const priceProductOld = Math.round(cartProduct[index].price / cartProduct[index].manyProduct);
    return priceProductOld;
};

const updateDataPatch = (cartProduct, productid, manyProduct) => {
    let index;
    let id;
    const isbool = cartProduct.some((product, ind) => {
        index = ind;
        id = product.id;
        return productid === product.productid;
    });
    if (isbool) {
        const priceProductOldPlus = calculatePriceOld(cartProduct, index);
        const price = priceProductOldPlus * manyProduct;
        const dataPatch = {
            price,
            manyProduct,
        };
        return {
            index,
            id,
            dataPatch,
        };
    }
    return {};
};

const getDataPatchPlus = (event, cartProduct, updateDataPatch) => {
    const parent = event.target.closest(`.parent`);
    const inputMany = parent.querySelector('.input-value');
    const manyProduct = Number(inputMany.value) + 1;
    const productid = Number(parent.getAttribute('productid'));
    return updateDataPatch(cartProduct, productid, manyProduct);
};

const getDataPatchMinus = (event, cartProduct, updateDataPatch) => {
    let manyProduct;
    const parent = event.target.closest(`.parent`);
    const inputMany = parent.querySelector('.input-value');
    if (Number(inputMany.value) !== 1) {
        manyProduct = Number(inputMany.value) - 1;
    }
    const productid = Number(parent.getAttribute('productid'));
    return updateDataPatch(cartProduct, productid, manyProduct);
};

// handle calc price and many

function HaveProduct() {
    const cartProducts = useSelector((state) => state.CartProducts.cartProducts);
    const dispatch = useDispatch();

    const handledeleProduct = (e) => {
        const btnDele = e.target.closest(`.dele-product`);
        const id = btnDele.dataset.id;
        dispatch(deleProductApi(id));
    };

    const handlePlus = (event) => {
        const { index, id, dataPatch } = getDataPatchPlus(event, cartProducts, updateDataPatch);
        dispatch(patchProductApi([index, id, dataPatch]));
    };

    const handleMinus = (event) => {
        const { index, id, dataPatch } = getDataPatchMinus(event, cartProducts, updateDataPatch);
        if (dataPatch.price) {
            dispatch(patchProductApi([index, id, dataPatch]));
        }
    };

    return (
        <div className={cx('have-product')}>
            <ul className={cx('list-product')}>
                {cartProducts.map((product, index) => (
                    <li key={index}>
                        <div className={cx('wrap-img')}>
                            <img src={product.imageProduct} alt="tee" />
                        </div>
                        <div className={cx('info-product')}>
                            <div className={cx('title-product')}>
                                <h3 className={cx('product-name')}>
                                    <a href="/">{product.nameProduct}</a>
                                </h3>
                                <button
                                    onClick={handledeleProduct}
                                    className={cx('dele-pro', 'dele-product')}
                                    data-id={product.id}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                            <div className={cx('layout-item')}>
                                <div className={cx('description-pro')}>
                                    <p className={cx('price')}>{`${product.price} vnd`}</p>
                                    <p className={cx('color-product')}>{`color: ${product.color}`}</p>
                                    <p className={cx('size-product')}>{`size: ${product.size}`}</p>
                                </div>
                                <div productid={product.productid} className={cx('many-product', 'parent')}>
                                    <button className={cx('btn', 'minus')}>
                                        <FontAwesomeIcon
                                            icon={faMinus}
                                            onClick={handleMinus}
                                            onDoubleClickCapture={handleMinus}
                                        />
                                    </button>
                                    <input
                                        className={cx('many-input', 'input-value')}
                                        type="text"
                                        value={product.manyProduct}
                                        onChange={() => {}}
                                    />
                                    <button
                                        className={cx('btn', 'plus')}
                                        onClick={handlePlus}
                                        onDoubleClickCapture={handlePlus}
                                    >
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
