import React, { Component } from 'react';

// COMPONENT
import HeaderTop    from './HeaderTop';
import HeaderBottom from './HeaderBottom'

// CSS
class Header extends Component {
  render() {
    return (
      <header className="header1">
        <div className="container-menu-header">
            <HeaderTop/>
            <HeaderBottom/>
        </div>
      </header>
    );
  }
}

export default Header;
