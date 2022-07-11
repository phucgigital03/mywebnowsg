import styles from './Form.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function Form({ children }, ref) {
    return (
        <form ref={ref} className={cx('form')}>
            {children}
        </form>
    );
}

export default forwardRef(Form);
