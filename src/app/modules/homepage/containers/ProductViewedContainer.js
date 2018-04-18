import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { fetch_product_viewed } from './../actions/index';
import ProductViewedCarousel from './../components/ProductViewedCarousel';

class ProductViewedContainer extends Component {
    constructor(props) {
      super(props);
    }

    // FETCH API
    componentDidMount() {
      this.props.fetch_product_viewed({
        total_record  : 12,
        post_status   : 'publish',
        type          : 'viewed',
        resize        : 1,
        resize_width  : 270,
        resize_height  : 360,
      });
    }

    render() {
      let { items } = this.props;
      return (
        <ProductViewedCarousel items={ items } />
      )
    }
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.home_product_viewed.items,
    notification  : state.home_product_viewed.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_product_viewed : (data) => {
      dispatch(fetch_product_viewed(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductViewedContainer);