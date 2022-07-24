import styles from './FeatureModel.module.scss';
import classNames from 'classnames/bind';
import { useState, createContext, useEffect, useCallback } from 'react';

import Model from '~/features/Model';
import ModelProduct from '~/features/Model/ModelProduct';
import { RequirefilterProduct } from '~/services';

const cx = classNames.bind(styles);
const TranData = createContext();

function getPathandIndexId(event) {
    const btnchoose = event.target;
    const href = btnchoose.href;
    const startPoint = href.indexOf('@') + 1;
    const endPoint = href.indexOf('-');
    const path = href.slice(startPoint, endPoint);
    const indexIdSwitch = Number(btnchoose.dataset.id);
    return [path, indexIdSwitch];
}

function FeatureModel({ children }) {
    const [indexId, setIndexId] = useState('');
    const [indexIdSwitch, setIndexIdSwitch] = useState('');
    const [product, setProduct] = useState([]);
    const [path, setPath] = useState('');
    const [dataBreadCrumb, setDataBreadCrumb] = useState(['/']);

    const handleDisplayModel = (e) => {
        const btnwatchfast = e.target;
        const indexId = Number(btnwatchfast.dataset.id);
        setIndexId(indexId);
    };

    const handleCloseModel = useCallback(() => {
        setProduct([]);
    }, []);

    // set title at DefaultLayout
    const handlePath = (path) => {
        setPath(path.slice(1, path.length));
    };

    const handleReloadBreadCrumb = (...path) => {
        setDataBreadCrumb((prevState) => {
            return [prevState[0], ...path];
        });
    };

    const handleSwitchPage = (event) => {
        const [path, indexIdSwitch] = getPathandIndexId(event);
        setPath(path);
        setIndexIdSwitch(indexIdSwitch);
    };

    // call Api model
    useEffect(() => {
        if (!indexId) {
            return;
        }
        const filterProduct = async () => {
            const product = await RequirefilterProduct.filterProduct(path, indexId);
            console.log(product);
            setProduct(product);
        };
        filterProduct();
    }, [path, indexId]);

    // data at feature
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
                {product.length > 0 && (
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
