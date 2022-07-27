import styles from './BreadCrumb.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext, memo } from 'react';

import { TranData } from '~/features/FeatureModel/FeatureModel';
const cx = classNames.bind(styles);

function BreadCrumb() {
    const { dataBreadCrumb } = useContext(TranData);

    console.log(dataBreadCrumb);
    return (
        <div className={cx('breadcrumb')}>
            <div className={cx('inner')}>
                <ul className={cx('btn-nav')}>
                    {dataBreadCrumb.map((dataBreadCrumbEle, index) => {
                        const stringFirstPath = dataBreadCrumbEle[0];
                        if (stringFirstPath === '/') {
                            if (dataBreadCrumbEle.length === 1) {
                                return (
                                    <li key={index} className={cx('item')}>
                                        <Link to={'/'}>{'Home'}</Link>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={index} className={cx('item')}>
                                        <Link to={dataBreadCrumbEle}>
                                            {dataBreadCrumbEle.slice(1, dataBreadCrumbEle.length)}
                                        </Link>
                                    </li>
                                );
                            }
                        } else {
                            return (
                                <li key={index} className={cx('item')}>
                                    <span className={cx('title')}>{dataBreadCrumbEle}</span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
}

export default memo(BreadCrumb);
