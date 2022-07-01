import styles from './InputSize.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function InputSize({ value, dataid, checked = false, onChange, children }) {
    return (
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
            <div className={cx('wrap-size')}>{children}</div>
        </div>
    );
}

export default InputSize;
