import React from 'react';

// HOME
import IndexPage from './../homepage/IndexPage';

// THEME DETAIL
import ProductDetailPage from './../product/ProductDetailPage';

const ROUTER = [
    {
        path        : '/',
        component   : () => <IndexPage/>,
        exact       : 1
    },
    {
        path        : '/chi-tiet/:slug/:id',
        component   : () => <ProductDetailPage/>,
        exact       : 0
    }
    // {
    //     path        : '/chi-tiet/:slug/:id',
    //     component   : () => <ProductDetailPage/>,
    //     exact       : 0
    // }
];
{/* <Route path='/chi-tiet/:slug/:id' component={ProductDetailPage}/> */}

export default ROUTER ;