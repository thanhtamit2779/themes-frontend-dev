import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { fetch_theme_latest } from './../actions/index';
import ThemeLatestCarousel from './../components/ThemeLatestCarousel';

class ThemeLatestContainer extends Component {
    constructor(props) {
      super(props);
    }

    // FETCH API
    componentDidMount() {
      this.props.fetch_theme_latest({
        total_record  : 12,
        post_status   : 'publish',
        type          : 'latest',
        resize        : 1,
        resize_width  : 270,
        resize_height  : 360,
      });
    }

    render() {
      let { items } = this.props;
      return (
        <ThemeLatestCarousel items={ items } />
      )
    }
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.home_theme_latest.items,
    notification  : state.home_theme_latest.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_theme_latest : (data) => {
      dispatch(fetch_theme_latest(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeLatestContainer);