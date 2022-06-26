import styles from './InputColor.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function InputColor({ value, dataid, checked = false, onChange }) {
    return (
        <div className={cx('fix-tippy')}>
            <Tippy interactive placement="top" content={value} offset={[2, 10]}>
                <div className={cx('wrap-input')}>
                    <input
                        data-id={dataid}
                        className={cx('availabel')}
                        type="radio"
                        value={value}
                        id={value}
                        name={value}
                        checked={checked ? true : false}
                        onChange={onChange}
                    />
                    <label className={cx('label-icon', value)} htmlFor={value}></label>
                    <span className={cx('icon-check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </div>
            </Tippy>
        </div>
    );
}

export default InputColor;
