import React from 'react';

// HOME
import IndexPage from './../homepage/IndexPage';

// THEME DETAIL
import ThemeDetailPage from './../product/ThemeDetailPage';

const ROUTER = [
    {
        path        : '/',
        component   : () => <IndexPage/>,
        exact       : 1
    },
    {
        path        : '/chi-tiet/:slug/:id',
        component   : () => <ThemeDetailPage/>,
        exact       : 0
    }
    // {
    //     path        : '/chi-tiet/:slug/:id',
    //     component   : () => <ThemeDetailPage/>,
    //     exact       : 0
    // }
];
{/* <Route path='/chi-tiet/:slug/:id' component={ThemeDetailPage}/> */}

export default ROUTER ;