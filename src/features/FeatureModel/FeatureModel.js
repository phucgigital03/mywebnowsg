import styles from './FeatureModel.module.scss';
import classNames from 'classnames/bind';
import { useState, createContext, useEffect, useCallback } from 'react';

import Model from '~/features/Model';
import ModelProduct from '~/features/Model/ModelProduct';
import { RequirefilterProduct } from '~/services/ui';

const cx = classNames.bind(styles);
const TranData = createContext();

const getPathandIndexId = (event) => {
    const btnchoose = event.target;
    const href = btnchoose.href;
    const startPoint = href.indexOf('@') + 1;
    const endPoint = href.indexOf('-');
    const path = href.slice(startPoint, endPoint);
    const indexIdSwitch = Number(btnchoose.dataset.id);
    return [path, indexIdSwitch];
};

function FeatureModel({ children }) {
    const [product, setProduct] = useState([]);
    const [indexId, setIndexId] = useState('');
    const [path, setPath] = useState('');
    const [indexIdSwitch, setIndexIdSwitch] = useState('');
    const [dataBreadCrumb, setDataBreadCrumb] = useState(['/']);

    const handleDisplayModel = (e) => {
        const btnwatchfast = e.target;
        const indexId = Number(btnwatchfast.dataset.id);
        setIndexId(indexId);
    };

    const handleCloseModel = useCallback(() => {
        setProduct([]);
        setIndexId('');
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
            setProduct(product);
        };
        filterProduct();
    }, [path, indexId]);

    // data at feature
    const dataModelBreadCrumb = {
        product,
        indexIdSwitch,
        dataBreadCrumb,
        path,
        handleSwitchPage,
        handlePath,
        handleDisplayModel,
        handleReloadBreadCrumb,
        handleCloseModel,
    };

    return (
        <>
            <TranData.Provider value={dataModelBreadCrumb}>
                {children}
                {product.length > 0 && (
                    <Model className={cx('show')}>
                        <ModelProduct />
                    </Model>
                )}
            </TranData.Provider>
        </>
    );
}
export { TranData };
export default FeatureModel;
