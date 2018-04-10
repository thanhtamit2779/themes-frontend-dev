import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { fetch_theme_viewed } from './../actions/index';
import ThemeViewedCarousel from './../components/ThemeViewedCarousel';

class ThemeViewedContainer extends Component {
    constructor(props) {
      super(props);
    }

    // FETCH API
    componentDidMount() {
      this.props.fetch_theme_viewed({
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
        <ThemeViewedCarousel items={ items } />
      )
    }
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.home_theme_viewed.items,
    notification  : state.home_theme_viewed.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_theme_viewed : (data) => {
      dispatch(fetch_theme_viewed(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeViewedContainer);