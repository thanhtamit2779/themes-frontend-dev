import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { NavLink, Route } from 'react-router-dom';

import { fetch_categories } from './../actions/index';

import * as _ from 'lodash';
import { Sidebar, Icon, Dropdown, Button } from 'semantic-ui-react';
import {
  Col,
  FormGroup,
  FormControl,
  Form
} from 'react-bootstrap';
import { Input } from 'semantic-ui-react' ;

class SidebarLeft extends Component {

  constructor(props) {
    super(props);
    this.categories       = this.categories.bind(this);
    this.createSelection  = this.createSelection.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
  }

  // FETCH API
  componentWillMount() {
    this.props.fetch_categories({
      per_page     : 'all',
      resize       : 1,
      resize_width : 45,
      resize_height: 30
    });
  }

  // CATEGORIES
  categories(categories) {
    if(_.isEmpty(categories)) return false;

    let { toggleVisibility }   = this.props;
    
    return categories.map( (item, key) => {
      let link  = `/danh-muc/${item.term_slug}/${item.term_id}`;
      return (
        <Route key={key} path={link} children={({ match }) => (
          <li className={ match ? 'nav-item active' : 'nav-item' }>
            <NavLink to={link} className={ match ? 'nav-link active' : 'nav-link' } onClick={ () => toggleVisibility() }>
              {item.term_name}
            </NavLink>
          </li>
        )}/> 
      );
    });
  }

  createSelection(categories) {
    if(_.isEmpty(categories)) return false;
    return categories.map( (item, key) => {
      return (<option key={key} value={item.term_id}>{item.term_name}</option>);
    });
  }

  handleSubmit(event) {
    event.preventdefault();
    this.props.history.push('/tim-kiem');
  }

  render() {

    let { items, toggleVisibility }   = this.props;
    let { terms }   = items;
    let categories  = terms;

    return ( 
      <React.Fragment>
        {/* FORM */}
        <Form method="GET" action="/tim-kiem">
          <FormGroup>
            <Col sm={12}>
              <FormControl type="text" placeholder="Nhập từ khóa tìm kiếm..." name="post_title"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <FormControl componentClass="select" placeholder="--- Chọn mẫu theme ---" name="cate_id">
                  <option value="">--- Chọn mẫu theme ---</option>
                  { this.createSelection(categories) }
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <Button type='submit' fluid>Tìm kiếm</Button>
            </Col>
          </FormGroup>
        </Form>

        {/* TYPE THEME */}
        <ul className="list-category">
          <Route path='/san-pham/moi-nhat' children={({ match }) => (
            <li className={ match ? 'nav-item active' : 'nav-item' }>
              <NavLink to='/san-pham/moi-nhat' className={ match ? 'nav-link active' : 'nav-link' } onClick={ () => toggleVisibility() }>
                Mới nhất
              </NavLink>
            </li>
          )}/>

          <Route path='/san-pham/noi-bat' children={({ match }) => (
            <li className={ match ? 'nav-item active' : 'nav-item' }>
              <NavLink to='/san-pham/noi-bat' className={ match ? 'nav-link active' : 'nav-link' } onClick={ () => toggleVisibility() }>
                Nổi bật
              </NavLink>
            </li>
          )}/>

          <Route path='/san-pham/xem-nhieu' children={({ match }) => (
            <li className={ match ? 'nav-item active' : 'nav-item' }>
              <NavLink to='/san-pham/xem-nhieu' className={ match ? 'nav-link active' : 'nav-link' } onClick={ () => toggleVisibility() }>
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
