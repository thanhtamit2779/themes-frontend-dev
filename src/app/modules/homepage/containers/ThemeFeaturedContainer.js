import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { fetch_theme_featured } from './../actions/index';
import ThemeFeaturedCarousel from './../components/ThemeFeaturedCarousel';

class ThemeFeaturedContainer extends Component {
    constructor(props) {
      super(props);
    }

    // FETCH API
    componentDidMount() {
      this.props.fetch_theme_featured({
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
        <ThemeFeaturedCarousel items={ items } />
      )
    }
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.home_theme_featured.items,
    notification  : state.home_theme_featured.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_theme_featured : (data) => {
      dispatch(fetch_theme_featured(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeFeaturedContainer);