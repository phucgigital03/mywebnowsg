import styles from './ItemDetail.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/component/Button';
import InputColor from './InputColor';
import { useState } from 'react';

const cx = classnames.bind(styles);

const arrcolors = ['blue', 'yellow', 'black', 'white'];

function ItemDetail({ images }) {
    const [indexInp, setIndexInp] = useState(0);
    const [valueColor, setValueColor] = useState(arrcolors[0]);

    // console.log(valueColor);

    const handleGetIndex = (e) => {
        const index = Number(e.target.dataset.id);
        setValueColor(arrcolors[index]);
        setIndexInp(index);
    };

    return (
        <div className={cx('watch-fast')}>
            <div className="row">
                <div className="col l-5">
                    <div className={cx('all-img')}>
                        <div className={cx('wrap-img')}>
                            <a href="/" className={cx('link-pro')}>
                                <img src={images.tee} alt="ao" />
                            </a>
                        </div>
                        <ul className={cx('show-product')}>
                            <li className={cx('list-img')}>
                                <img src={images.tee} alt="ao" />
                            </li>
                            <li className={cx('list-img')}>
                                <img src={images.tee} alt="ao" />
                            </li>
                            <li className={cx('list-img')}>
                                <img src={images.tee} alt="ao" />
                            </li>
                            <li className={cx('list-img')}>
                                <img src={images.tee} alt="ao" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col l-7">
                    <div className={cx('info-item')}>
                        <h3 className={cx('name-product')}>
                            <a href="/" className={cx('name-link')}>
                                PIXEL NOWSAIGON CAP
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
                        <span className={cx('price')}>280000 vnd</span>
                        <div className={cx('descrition')}>
                            <p>NEEDS OF WISDOM® / Streetwear / Based in Saigon / Made in Vietnam</p>
                            <a href="/">Xem chi tiết</a>
                        </div>
                        <div className={cx('watch-color')}>
                            <h3>Màu sắc</h3>
                            {arrcolors.map((color, index) => {
                                return index === indexInp ? (
                                    <InputColor
                                        dataid={index}
                                        onChange={handleGetIndex}
                                        key={index}
                                        value={color}
                                        checked
                                    />
                                ) : (
                                    <InputColor dataid={index} onChange={handleGetIndex} key={index} value={color} />
                                );
                            })}
                        </div>
                        <div className={cx('manyandbtn')}>
                            <div className={cx('many')}>
                                <input type="text" value={1} onChange={() => {}} />
                                <div className={cx('wrap-btn')}>
                                    <button className={cx('btn')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <button className={cx('btn')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <Button primary medium>
                                THÊM VÀO GIỎ HÀNG
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
