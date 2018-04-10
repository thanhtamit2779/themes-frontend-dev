import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { fetch_banners } from './../actions/index';
import Banner from './../components/Banner';

class BannerContainer extends Component {
    constructor(props) {
      super(props);
    }

    // FETCH API
    componentDidMount() {
      this.props.fetch_banners({
        per_page     : 3,
        resize       : 1,
        resize_width : 370,
        resize_height : 340
      });
    }

    render() {
      let { items } = this.props;
      return (
        <Banner items={items}/>
      )
    }
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.home_banner.items,
    notification  : state.home_banner.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_banners : (data) => {
      dispatch(fetch_banners(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer);