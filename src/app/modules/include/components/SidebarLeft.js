import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { Input } from 'semantic-ui-react' ;

import { NavLink, Route } from 'react-router-dom';

import { fetch_categories } from './../actions/index';

import * as _ from 'lodash';

class SidebarLeft extends Component {

  constructor(props) {
    super(props);
    this.categories = this.categories.bind(this);
  }

  // FETCH API
  componentWillMount() {
    this.props.fetch_categories({
      per_page     : 'all'
    });
  }

  // CATEGORIES
  categories(categories) {
    if(_.isEmpty(categories)) return false;
    
    return categories.map( (item, key) => {
      let link  = `/danh-muc/${item.term_slug}/${item.term_id}`;
      return (
        <Route key={key} path={link} children={({ match }) => (
          <li className={ match ? 'nav-item active' : 'nav-item' }>
            <NavLink to={link} className={ match ? 'nav-link active' : 'nav-link' }>
              {item.term_name}
            </NavLink>
          </li>
        )}/> 
      );
    });
  }

  render() {

    let { items }   = this.props;
    let { terms }   = items;
    let categories  = terms;

    return ( 
      <React.Fragment>
        {/* FORM */}
        <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...'/>

        {/* TYPE THEME */}
        <ul className="list-category">
          <Route path='' children={({ match }) => (
            <li className={ match ? 'nav-item active' : 'nav-item' }>
              <NavLink to='' className={ match ? 'nav-link active' : 'nav-link' }>
                Mới nhất
              </NavLink>
            </li>
          )}/>

          <Route path='' children={({ match }) => (
            <li className={ match ? 'nav-item active' : 'nav-item' }>
              <NavLink to='' className={ match ? 'nav-link active' : 'nav-link' }>
                Nổi bật
              </NavLink>
            </li>
          )}/>

          <Route path='' children={({ match }) => (
            <li className={ match ? 'nav-item active' : 'nav-item' }>
              <NavLink to='' className={ match ? 'nav-link active' : 'nav-link' }>
                Xem nhiều
              </NavLink>
            </li>
          )}/> 
        </ul>

        <span className="label label-category">Danh mục</span>
        <ul className="list-category">
          { this.categories(categories) }
        </ul>
      
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.categories.items,
    notification  : state.categories.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_categories : (data) => {
      dispatch(fetch_categories(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarLeft);
