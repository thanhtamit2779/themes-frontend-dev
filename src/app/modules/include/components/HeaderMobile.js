import React, {Component} from 'react';

import {connect} from 'react-redux';

import {Route, NavLink} from 'react-router-dom';
import menu from './../../config/menu';

import * as _ from 'lodash';

import {listCart} from './../../cart/actions/index';

class HeaderMobile extends Component {
  constructor(props) {
    super(props);
    this.calTotalCart = this.calTotalCart.bind(this);
  }

  componentDidMount() {
    this.props.listCart();
  }

  calTotalCart(carts) {
    if (_.isEmpty(carts)) 
      return 0;
    
    var quantity = 0;
    var total = 0;
    carts.map((cart, key) => {
      quantity = cart.quantity;
      total += quantity;
    });

    return total;
  }

  menu(menu) {
    if (menu.length === 0) 
      return false;
    
    var {toggleVisibility, stateVisible} = this.props;

    return menu.map((item, key) => {
      return (item.click == false)
        ? <Route
            key={key}
            path={item.path}
            children={({match}) => (
            <li
              className={match
              ? 'item-menu-mobile active'
              : 'item-menu-mobile'}>
              <NavLink
                to={item.path}
                className={match
                ? 'active'
                : ''}>
                <i className={item.icon}/> {item.name}
              </NavLink>
            </li>
          )}/>
        : <Route
          key={key}
          path={item.path}
          children={({match}) => (
          <li className={match
            ? 'item-menu-mobile active'
            : 'item-menu-mobile'}>
            <NavLink
              to={item.path}
              className={match
              ? 'active'
              : ''}
              onClick={() => toggleVisibility()}>
              <i className={item.icon}/> {item.name}
            </NavLink>
          </li>
        )}/>
    });
  }

  render() {
    const {toggleVisibility, stateVisible} = this.props;
    const carts = this.props.items;

    return (
      <React.Fragment>
        <div className="wrap_header_mobile">

          <a href="index.html" className="logo-mobile">
            <img
              src={require('./../../../../vendor/images/icons/logo.png')}
              alt="IMG-LOGO"/>
          </a>

          <div className="btn-show-menu">
            <div className="header-icons-mobile">
              <div className="header-wrapicon2">
                <img
                  src={require('./../../../../vendor/images/icons/icon-header-02.png')}
                  className="header-icon1 js-show-header-dropdown"
                  alt="ICON"/>
                <span className="header-icons-noti">0</span>
              </div>
            </div>

            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner"/>
              </span>
            </div>
          </div>
        </div>

        <div className="wrap-side-menu" >
          <nav className="side-menu">
            <ul className="main-menu">
              {this.menu(menu)}
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {items: state.cart.items, notification: state.cart.notification}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    listCart: () => {
      dispatch(listCart());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile);
