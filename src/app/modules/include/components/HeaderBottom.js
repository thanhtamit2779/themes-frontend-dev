import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom' ;
import menu from './../../config/menu';
import { Sidebar, Segment, Icon , Menu} from 'semantic-ui-react';

class HeaderBottom extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
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

    return (
      <React.Fragment>
          {/* { (visible == true) ?  
          <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
                <Menu.Item name='home'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                <Menu.Item name='gamepad'>
                  <Icon name='gamepad' />
                  Games
                </Menu.Item>
                <Menu.Item name='camera'>
                  <Icon name='camera' />
                  Channels
                </Menu.Item>
              </Sidebar>
          </Sidebar.Pushable> : ''
          } */}

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
                <img src={ require('./../../../../vendor/images/icons/icon-header-02.png') } className="header-icon1 js-show-header-dropdown" alt="ICON" />
                <span className="header-icons-noti">0</span>
                {/* Header cart noti */}
              </div>
            </div>
          </div>
      </React.Fragment>  
    );
  }
}

export default HeaderBottom;
