import React, { Component } from 'react';

/* INCLUDE */
import Header from './include/components/Header';
import Content from './include/components/Content';
import Footer from './include/components/Footer';
import SidebarLeft from './include/components/SidebarLeft';

import { Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';

/* CSS */
import './../../vendor/plugins/bootstrap/css/bootstrap.min.css';
import './../../vendor/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './../../vendor/fonts/themify/themify-icons.css';
import './../../vendor/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './../../vendor/fonts/elegant-font/html-css/style.css';
import './../../vendor/plugins/animate/animate.css';
import './../../vendor/plugins/animsition/css/animsition.min.css';
import './../../vendor/css/util.css';
import './../../vendor/plugins/own-carousel/assets/owl.carousel.min.css';
import './../../vendor/plugins/own-carousel/assets/owl.theme.default.min.css';
import './../../vendor/css/main.css';
import 'semantic-ui-css/semantic.min.css';

/* JS */
//import './../../vendor/plugins/bootstrap/js/bootstrap.min.js';
import './../../vendor/plugins/animsition/js/animsition.min.js';
import './../../vendor/plugins/own-carousel/owl.carousel.min.js';
import './../../vendor/js/main.js';

class FrontendBootstrap extends Component {

  constructor(props) {
    super(props);

    this.state = { visible: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { visible } = this.state;

    return (
      <React.Fragment>
        <Header toggleVisibility={this.toggleVisibility} stateVisible={visible} />

        <section className="content">
          <Sidebar.Pushable>
            <Sidebar  animation='push' width='thin' visible={visible} icon='labeled' vertical="true" inverted="true">
              <SidebarLeft/>
            </Sidebar>

            <Sidebar.Pusher>
              <Content/> 
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </section>

        <Footer/>
      </React.Fragment>
    )
  }
}

export default FrontendBootstrap;