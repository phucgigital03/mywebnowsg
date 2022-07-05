import styles from './Buttonproduct.module.scss';
import classNames from 'classnames/bind';

import Button from '~/component/Button';
import { useContext } from 'react';
import { TranData } from '~/features/FeatureModel/FeatureModel';

const cx = classNames.bind(styles);

function Buttonproduct({ dataid, nameProduct, path }) {
    const nameResult = nameProduct.split(' ').join('');
    const pathResult = path.slice(1, path.length);
    const [, handleDisplayModel, handleSwitchPage] = useContext(TranData);
    return (
        <div className={cx('wrapper-btn')}>
            <Button dataid={dataid} primary onClick={handleSwitchPage} to={`/@${pathResult}-${nameResult}-${dataid}`}>
                Tuỳ chọn
            </Button>
            <Button dataid={dataid} primary onClick={handleDisplayModel}>
                Xem nhanh
            </Button>
        </div>
    );
}

export default Buttonproduct;
