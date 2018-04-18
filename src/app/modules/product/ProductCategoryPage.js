import React, {Component} from 'react';

import ProductCategoryContainer from './containers/ProductCategoryContainer';

class ProductCategoryPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.match.params.id;
    return (
      <React.Fragment>
        <ProductCategoryContainer id={id}/>
      </React.Fragment>
    );
  }
}

export default ProductCategoryPage;