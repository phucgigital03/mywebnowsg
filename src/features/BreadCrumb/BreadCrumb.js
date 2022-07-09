import styles from './BreadCrumb.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState, memo } from 'react';

import { TranData } from '~/features/FeatureModel/FeatureModel';
import { RequirefilterProduct } from '~/services';
const cx = classNames.bind(styles);

function BreadCrumb() {
    const pathApi = window.location.pathname;
    const [, , , dataBreadCrumb, handleBreadCrumb] = useContext(TranData);
    const [breadCrumb, setbreadCrumb] = useState(['/']);

    useEffect(() => {
        if (dataBreadCrumb.length > 1) {
            const isbool = pathApi.startsWith('/@');
            if (!isbool) {
                setbreadCrumb(dataBreadCrumb.slice(0, 2));
                return;
            }
            setbreadCrumb(dataBreadCrumb);
            return;
        }

        // reset page logic down
        const filterProduct = async () => {
            let pathNew;
            const headerPath = pathApi.split('-')[0];
            const isbool = headerPath.startsWith('/@');
            const indexId = Number(pathApi.slice(pathApi.length - 1, pathApi.length));
            if (isbool) {
                pathNew = headerPath.slice(2, headerPath.length);
                const products = await RequirefilterProduct.filterProduct(pathNew, indexId);
                setbreadCrumb((breadCrumb) => {
                    return [breadCrumb[0], products[0].path, products[0].nameProduct];
                });
            } else {
                pathNew = headerPath.slice(1, headerPath.length);
                setbreadCrumb((breadCrumb) => {
                    return [breadCrumb[0], pathNew];
                });
            }
        };
        filterProduct();
    }, [pathApi]);

    return (
        <div className={cx('breadcrumb')}>
            <div className={cx('inner')}>
                <ul className={cx('btn-nav')}>
                    {breadCrumb.map((dataBreadCrumbEle, index) => {
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
                                        <Link
                                            onClick={handleBreadCrumb}
                                            data-path={dataBreadCrumbEle}
                                            to={dataBreadCrumbEle}
                                        >
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
