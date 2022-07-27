import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, memo, useEffect } from 'react';

import { DefaultHome } from './layouts';
import routes from '~/router';
import useAxiosPrivate from './hooks/useAxiosPrivate';

function App() {
    const axiosRequired = useAxiosPrivate();

    useEffect(() => {
        const getUSer = async () => {
            axiosRequired.get('me');
            axiosRequired.get('shop');
            axiosRequired.get('products3');
        };
        getUSer();
    }, []);

    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    let Layout = DefaultHome;
                    const Content = route.component;

                    if (route.layout === null) {
                        Layout = Fragment;
                    } else if (route.layout) {
                        Layout = route.layout;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Content />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default memo(App);
