import React, {Component} from 'react';

import ProductSearchContainer from './containers/ProductSearchContainer';

//import qs from 'qs'; 
import { parse } from 'qs';

class ProductSearchPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let id              = this.props.match.params.id;
    let search          = this.props.location.search;
    let dataSearch      = parse(search.substr(1));
    return (
      <React.Fragment>
        <ProductSearchContainer dataSearch={dataSearch}/>
      </React.Fragment>
    );
  }
}

export default ProductSearchPage;