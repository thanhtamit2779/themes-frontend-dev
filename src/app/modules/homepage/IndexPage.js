import React, { Component } from 'react';

import BannerContainer from './containers/BannerContainer';
import ProductContainer from './containers/ProductContainer';

class IndexPage extends Component {
    render() {
      return (
        <React.Fragment>
          <BannerContainer/>
          <ProductContainer/>
        </React.Fragment>
      );
    }
  }
  
export default IndexPage;