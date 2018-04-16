
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import ThemeDetailPage from './../../product/ThemeDetailPage';
import ThemeCategoryPage from './../../product/ThemeCategoryPage';
import ViewCart from './../../cart/components/ViewCart';
import IndexPage from './../../homepage/IndexPage';

class Content extends Component {
  render() {
    return ( 
      <React.Fragment>
          <Switch>
            <Route path='/' component={IndexPage} exact/>
            <Route path='/chi-tiet/:slug/:id' component={ThemeDetailPage} exact/>
            <Route path='/danh-muc/:slug/:id' component={ThemeCategoryPage} exact/>
            <Route path='/gio-hang' component={ViewCart} exact/>
          </Switch>  
      </React.Fragment>
    );
  }
}

export default Content;
