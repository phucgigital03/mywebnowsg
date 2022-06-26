import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { DefaultHome } from './layouts';
import routes from '~/router';

function App() {
    let Layout = DefaultHome;
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Content = route.component;

                    if (route.layout === null) {
                        Layout = <Fragment />;
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

export default App;
