import React, { Component } from 'react';

import BannerContainer from './containers/BannerContainer';
import ThemeContainer from './containers/ThemeContainer';

class IndexPage extends Component {
    render() {
      return (
        <React.Fragment>
          <BannerContainer/>
          <ThemeContainer/>
        </React.Fragment>
      );
    }
  }
  
export default IndexPage;