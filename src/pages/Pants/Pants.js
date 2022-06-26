import styles from './Pants.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Pants() {
    return (
        <div className={cx('content')}>
            <h2>Pants pages</h2>
        </div>
    );
}

export default Pants;
