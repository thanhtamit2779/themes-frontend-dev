import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom' ;
import menu from './../config/menu';

class HeaderBottom extends Component {
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
    return (

      <div className="wrap_header">
        {/* Logo */}
        <a href="index.html" className="logo">
          <img src={ require('./../../../vendor/images/icons/logo.png') } alt="IMG-LOGO" />
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
          <a href="#" className="header-wrapicon1 dis-block">
            <i class="fa fa-search"/>
          </a>
          <span className="linedivide1" />
          <div className="header-wrapicon2">
            <img src={ require('./../../../vendor/images/icons/icon-header-02.png') } className="header-icon1 js-show-header-dropdown" alt="ICON" />
            <span className="header-icons-noti">0</span>
            {/* Header cart noti */}
            <div className="header-cart header-dropdown">
              <ul className="header-cart-wrapitem">
                <li className="header-cart-item">
                  <div className="header-cart-item-img">
                    <img src="images/item-cart-01.jpg" alt="IMG" />
                  </div>
                  <div className="header-cart-item-txt">
                    <a href="#" className="header-cart-item-name">
                      White Shirt With Pleat Detail Back
                    </a>
                    <span className="header-cart-item-info">
                      1 x $19.00
                    </span>
                  </div>
                </li>
                <li className="header-cart-item">
                  <div className="header-cart-item-img">
                    <img src="images/item-cart-02.jpg" alt="IMG" />
                  </div>
                  <div className="header-cart-item-txt">
                    <a href="#" className="header-cart-item-name">
                      Converse All Star Hi Black Canvas
                    </a>
                    <span className="header-cart-item-info">
                      1 x $39.00
                    </span>
                  </div>
                </li>
                <li className="header-cart-item">
                  <div className="header-cart-item-img">
                    <img src="images/item-cart-03.jpg" alt="IMG" />
                  </div>
                  <div className="header-cart-item-txt">
                    <a href="#" className="header-cart-item-name">
                      Nixon Porter Leather Watch In Tan
                    </a>
                    <span className="header-cart-item-info">
                      1 x $17.00
                    </span>
                  </div>
                </li>
              </ul>
              <div className="header-cart-total">
                Total: $75.00
              </div>
              <div className="header-cart-buttons">
                <div className="header-cart-wrapbtn">
                  {/* Button */}
                  <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                    View Cart
                  </a>
                </div>
                <div className="header-cart-wrapbtn">
                  {/* Button */}
                  <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                    Check Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBottom;
