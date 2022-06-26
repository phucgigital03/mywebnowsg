import styles from './DefaultHome.module.scss';
import classNames from 'classnames/bind';
import { createContext, useState } from 'react';

import Header from '~/layouts/Component/Header';
import Footer from '~/layouts/Component/Footer';
import Model from '~/component/Model';
import ModelProduct from '~/component/Model/ModelProduct';

const cx = classNames.bind(styles);
const TranData = createContext();

function DefaultHome({ children }) {
    const [display, setDisplay] = useState(false);

    const handleDisplayModel = () => {
        setDisplay(!display);
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <TranData.Provider value={[handleDisplayModel]}>{children}</TranData.Provider>
            </div>
            <Footer />
            {display && (
                <Model className={cx('position')}>
                    <ModelProduct onClick={handleDisplayModel} />
                </Model>
            )}
        </div>
    );
}

export { TranData };
export default DefaultHome;
