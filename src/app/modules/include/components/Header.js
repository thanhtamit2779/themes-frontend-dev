import React, { Component } from 'react';

// COMPONENT
import HeaderDesktop    from './HeaderDesktop';
import HeaderMobile    from './HeaderMobile';

// CSS
class Header extends Component {
  render() {

    const { toggleVisibility, stateVisible } = this.props;

    return (
      <header className="header1">
        <div className="container-menu-header">
          <HeaderDesktop toggleVisibility={toggleVisibility} stateVisible={stateVisible}/>
        </div>
        <HeaderMobile toggleVisibility={toggleVisibility} stateVisible={stateVisible}/>
      </header>
    );
  }
}

export default Header;
