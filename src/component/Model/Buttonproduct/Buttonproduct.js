import styles from './Buttonproduct.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import Button from '~/component/Button';
import { TranData } from '~/layouts/DefaultHome/DefaultHome';

const cx = classNames.bind(styles);

function Buttonproduct() {
    const [handleDisplayModel] = useContext(TranData);
    return (
        <div className={cx('wrapper-btn')}>
            <Button to="/tee" primary>
                Tuỳ chọn
            </Button>
            <Button to="/" primary onClick={handleDisplayModel}>
                Xem nhanh
            </Button>
        </div>
    );
}

export default Buttonproduct;
