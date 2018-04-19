import React, {Component} from 'react';

import ProductTypeContainer from './containers/ProductTypeContainer';

class ProductTypePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let type = this.props.match.params.type;
    return (
      <React.Fragment>
        <ProductTypeContainer type={type}/>
      </React.Fragment>
    );
  }
}

export default ProductTypePage;