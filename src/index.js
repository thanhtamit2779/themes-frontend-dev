// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// REACT - REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';      
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import home_banner from './app/modules/homepage/reducers/home_banner';
import home_theme_featured from './app/modules/homepage/reducers/home_theme_featured';
import home_theme_latest from './app/modules/homepage/reducers/home_theme_latest';
import home_theme_viewed from './app/modules/homepage/reducers/home_theme_viewed';
import theme_detail from './app/modules/product/reducers/theme_detail';
import theme_category from './app/modules/product/reducers/theme_category';
import categories from './app/modules/include/reducers/categories';
import cart from './app/modules/cart/reducers/index';

/* INCLUDE */
import FrontendBootstrap from './app/modules/FrontendBootstrap';

const rootReducer = combineReducers({
    home_banner,
    home_theme_featured,
    home_theme_latest,
    home_theme_viewed,
    theme_detail,
    theme_category,
    categories,
    cart
});

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <FrontendBootstrap/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
