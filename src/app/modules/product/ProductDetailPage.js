import React, {Component} from 'react';

import ProductDetailContainer from './containers/ProductDetailContainer';

class ProductDetailPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.match.params.id;
    return (
      <React.Fragment>
        <ProductDetailContainer id={id}/>
      </React.Fragment>
    );
  }
}

export default ProductDetailPage;