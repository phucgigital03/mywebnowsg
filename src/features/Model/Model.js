import styles from './Model.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Model({ children, className }) {
    return (
        <div
            className={cx('model', {
                [className]: className,
            })}
        >
            {children}
        </div>
    );
}

export default Model;
