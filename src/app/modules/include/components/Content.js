
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import ProductDetailPage from './../../product/ProductDetailPage';
import ProductCategoryPage from './../../product/ProductCategoryPage';
import ProductSearchPage from './../../product/ProductSearchPage';
import ProductTypePage from './../../product/ProductTypePage';
import ViewCart from './../../cart/components/ViewCart';
import IndexPage from './../../homepage/IndexPage';

class Content extends Component {
  render() {
    return ( 
      <React.Fragment>
          <Switch>
            <Route path='/' component={IndexPage} exact/>
            <Route path='/chi-tiet/:slug/:id' component={ProductDetailPage} exact/>
            <Route path='/danh-muc/:slug/:id' component={ProductCategoryPage} exact/>
            <Route path='/san-pham/:type' component={ProductTypePage} exact/>
            <Route path='/gio-hang' component={ViewCart} exact/>
            <Route path='/tim-kiem' component={ProductSearchPage} exact/>
          </Switch>  
      </React.Fragment>
    );
  }
}

export default Content;