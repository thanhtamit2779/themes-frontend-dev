import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Route, NavLink } from 'react-router-dom' ;
import menu from './../../config/menu';
import { Sidebar, Segment, Icon , Menu} from 'semantic-ui-react';

import * as _ from 'lodash';

import { listCart } from './../../cart/actions/index';

class HeaderBottom extends Component {
  constructor(props) {
    super(props);
    this.calTotalCart = this.calTotalCart.bind(this);
  }

  componentDidMount() {
    this.props.listCart();
  }

  calTotalCart(carts) {
    if (_.isEmpty(carts)) return 0;

    var quantity            = 0;
    var total               = 0;
    carts.map((cart, key) => {
        quantity        = cart.quantity;
        total           += quantity;
    });

    return total;
  }

  menu(menu) {
    if(menu.length === 0) return false;

    return menu.map( (item, key) => {
      return (
        <Route key={key} path={item.path} children={({ match }) => (
          <li className={ match ? 'nav-item active' : 'nav-item' }>
            <NavLink to={item.path} className={ match ? 'nav-link active' : 'nav-link' }>
              <i className={item.icon} /> {item.name}
            </NavLink>
          </li>
        )}/> 
      );
    });
  }
  
  render() {
    const { toggleVisibility, stateVisible } = this.props;
    const carts          = this.props.items;

    return (
      <React.Fragment>
          <div className="wrap_header">
            {/* Logo */}
            <a href="index.html" className="logo">
              <img src={ require('./../../../../vendor/images/icons/logo.png') } alt="IMG-LOGO" />
            </a>
            {/* Menu */}
            <div className="wrap_menu">
              <nav className="menu">
                <ul className="main_menu">
                  { this.menu(menu)}
                </ul>
              </nav>
            </div>
            {/* Header Icon */}
            <div className="header-icons">
              <button className="header-wrapicon1 dis-block" onClick={ toggleVisibility }>
                <i className="fa fa-search"/>
              </button>
              <span className="linedivide1" />
              <div className="header-wrapicon2">
                <NavLink to='/gio-hang'>
                  <img src={ require('./../../../../vendor/images/icons/icon-header-02.png') } className="header-icon1 js-show-header-dropdown" alt="ICON" />
                  <span className="header-icons-noti">{ this.calTotalCart(carts) }</span>
                </NavLink>  
              </div>
            </div>
          </div>
      </React.Fragment>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
      items         : state.cart.items,
      notification  : state.cart.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      listCart: () => {
          dispatch(listCart());
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBottom);
