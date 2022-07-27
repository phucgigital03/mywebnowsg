import styles from './Form.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function Form({ handleSubmitForm, children }, ref) {
    const handleSubmit = (e) => {
        e.preventDefault();

        handleSubmitForm();
    };

    return (
        <form ref={ref} className={cx('form')} onSubmit={handleSubmit}>
            {children}
        </form>
    );
}

export default forwardRef(Form);
