import styles from './FeatureModel.module.scss';
import classNames from 'classnames/bind';
import { useState, createContext, useEffect, useCallback } from 'react';

import Model from '~/component/Model';
import ModelProduct from '~/component/Model/ModelProduct';
import { requireAllProduct } from '~/services';

const cx = classNames.bind(styles);
const TranData = createContext();

function FeatureModel({ children }) {
    const [display, setDisplay] = useState(true);
    const [indexId, setIndexId] = useState('');
    const [indexIdSwitch, setIndexIdSwitch] = useState('');
    const [product, setProduct] = useState([]);

    const handleDisplayModel = (e) => {
        const btnwatchfast = e.target;
        const indexId = Number(btnwatchfast.dataset.id);
        setDisplay(true);
        setIndexId(indexId);
    };

    const handleCloseModel = useCallback(() => {
        setDisplay(false);
    }, []);

    const handleSwitchPage = (e) => {
        const btnchoose = e.target;
        const indexIdSwitch = Number(btnchoose.dataset.id);
        setIndexIdSwitch(indexIdSwitch);
    };

    // call Api model
    useEffect(() => {
        if (!indexId) {
            return;
        }
        const filterProduct = async () => {
            const product = await requireAllProduct.filterProduct(indexId);
            setProduct(product);
        };
        filterProduct();
    }, [indexId]);

    return (
        <>
            <TranData.Provider value={[indexIdSwitch, handleDisplayModel, handleSwitchPage]}>
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
