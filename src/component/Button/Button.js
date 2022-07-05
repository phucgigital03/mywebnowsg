import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    dataid,
    children,
    className,
    primary = false,
    disable = false,
    large = false,
    medium = false,
    onClick,
    ...passprops
}) {
    const props = {
        onClick,
        ...passprops,
    };
    let Component = 'button';

    if (disable) {
        for (const key in props) {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        }
    }

    if (href) {
        Component = 'a';
    } else if (to) {
        Component = Link;
    }

    return (
        <Component
            data-id={dataid}
            href={href}
            to={to}
            className={cx('btn', {
                [className]: className,
                primary,
                disable,
                large,
                medium,
            })}
            {...props}
        >
            {children}
        </Component>
    );
}

export default Button;
