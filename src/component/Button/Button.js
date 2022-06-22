import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button() {
    return ( 
        <button className={cx('btn')}>
            click me
        </button>
     );
}

export default Button;