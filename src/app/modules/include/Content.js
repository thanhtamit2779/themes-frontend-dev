
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import router from './../config/router';

import ThemeDetailPage from './../product/ThemeDetailPage';
import IndexPage from './../homepage/IndexPage';

class Content extends Component {

  showContent(router) {
    if(router.length === 0) return false;
    return router.map((item,key) => {
        return (<Route key={key} path={item.path} component={item.component} exact/>);
    })
  } 
  
  render() {
    return ( 
      <React.Fragment>
          <Switch>
            {/* { this.showContent(router) } */}
            <Route path='/' component={IndexPage} exact/>
            <Route path='/chi-tiet/:slug/:id' component={ThemeDetailPage}/>
          </Switch>  
      </React.Fragment>
    );
  }
}

export default Content;
