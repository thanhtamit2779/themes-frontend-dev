import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { fetch_product_featured } from './../actions/index';
import ProductFeaturedCarousel from './../components/ProductFeaturedCarousel';

class ProductFeaturedContainer extends Component {
    constructor(props) {
      super(props);
    }

    // FETCH API
    componentDidMount() {
      this.props.fetch_product_featured({
        total_record  : 12,
        post_status   : 'publish',
        type          : 'featured',
        resize        : 1,
        resize_width  : 270,
        resize_height  : 360,
      });
    }

    render() {
      let { items } = this.props;
      return (
        <ProductFeaturedCarousel items={ items } />
      )
    }
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.home_product_featured.items,
    notification  : state.home_product_featured.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_product_featured : (data) => {
      dispatch(fetch_product_featured(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductFeaturedContainer);