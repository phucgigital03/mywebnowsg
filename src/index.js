import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import GlobalStyles from '~/component/GlobalStyles/GlobalStyles';
import FeatureModel from '~/features/FeatureModel';
import store, { persistor } from './featureRedux/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <FeatureModel>
                    <App />
                </FeatureModel>
            </PersistGate>
        </Provider>
    </GlobalStyles>,
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
