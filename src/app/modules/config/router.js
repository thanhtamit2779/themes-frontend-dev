import React from 'react';

// HOME
import IndexPage from './../homepage/IndexPage';

// THEME DETAIL
import ThemeDetailPage from './../product/ThemeDetailPage';

const ROUTER = [
    {
        path        : '/',
        component   : () => <IndexPage/>,
    }
    // {
    //     path        : '/chi-tiet/:id',
    //     component   : () => <ThemeDetailPage/>,
    // }
];

export default ROUTER ;