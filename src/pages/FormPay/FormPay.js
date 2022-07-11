import styles from './FormPay.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FormPay() {
    return (
        <div className={cx('wrap-form')}>
            <h1>phuc nguyen digigtal 2003</h1>
        </div>
    );
}

export default FormPay;
