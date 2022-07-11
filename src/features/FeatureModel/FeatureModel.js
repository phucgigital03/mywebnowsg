import styles from './FeatureModel.module.scss';
import classNames from 'classnames/bind';
import { useState, createContext, useEffect, useCallback } from 'react';

import Model from '~/features/Model';
import ModelProduct from '~/features/Model/ModelProduct';
import { RequirefilterProduct } from '~/services';

const cx = classNames.bind(styles);
const TranData = createContext();

function FeatureModel({ children }) {
    const [indexId, setIndexId] = useState('');
    const [indexIdSwitch, setIndexIdSwitch] = useState('');
    const [display, setDisplay] = useState(true);
    const [product, setProduct] = useState([]);
    const [dataBreadCrumb, setDataBreadCrumb] = useState(['/']);
    const [path, setPath] = useState('');

    const handleDisplayModel = (e) => {
        const pathNew = e.target.closest('.parent-item').dataset.path;
        const btnwatchfast = e.target;
        const indexId = Number(btnwatchfast.dataset.id);
        setPath(pathNew);
        setDisplay(true);
        setIndexId(indexId);
    };

    const handleCloseModel = useCallback(() => {
        setDisplay(false);
    }, []);

    // set title at DefaultLayout
    const handlePath = (path) => {
        setPath(path);
    };

    const handleReloadBreadCrumb = (...path) => {
        setDataBreadCrumb((prevState) => {
            return [prevState[0], ...path];
        });
    };

    const handleSwitchPage = (event) => {
        const btnchoose = event.target;
        const indexIdSwitch = Number(btnchoose.dataset.id);
        setIndexIdSwitch(indexIdSwitch);
    };

    // call Api model
    useEffect(() => {
        if (!indexId) {
            return;
        }
        const filterProduct = async () => {
            const product = await RequirefilterProduct.filterProduct(path, indexId);
            setProduct(product);
        };
        filterProduct();
    }, [indexId]);

    const dataModelBreadCrumb = [
        indexIdSwitch,
        handleDisplayModel,
        handleSwitchPage,
        dataBreadCrumb,
        handlePath,
        path,
        handleReloadBreadCrumb,
    ];

    return (
        <>
            <TranData.Provider value={dataModelBreadCrumb}>
                {children}
                {display && product.length > 0 && (
                    <Model className={cx('show')}>
                        <ModelProduct product={product} onClick={handleCloseModel} />
                    </Model>
                )}
            </TranData.Provider>
        </>
    );
}
export { TranData };
export default FeatureModel;
