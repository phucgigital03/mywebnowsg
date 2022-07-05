import styles from './Form.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Form({ children }) {
    return <form className={cx('form')}>{children}</form>;
}

export default Form;
