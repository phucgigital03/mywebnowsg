import styles from './FormGroup.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FormGroup({ id, title, name, rules, messages = false, placeholder, className, ...propspass }) {
    return (
        <div className={cx('form-group')}>
            <label htmlFor={id}>{title}</label>
            <input
                className={cx('input', {
                    [className]: className,
                    ['out-line']: messages,
                })}
                id={id}
                name={name}
                rules={rules}
                placeholder={placeholder}
                {...propspass}
            />
            <span className={cx({ ['messages']: messages })}>{messages}</span>
        </div>
    );
}

export default FormGroup;
