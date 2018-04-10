import React, { Component } from 'react';

/* INCLUDE */
import Header from './include/Header';
import Content from './include/Content';
import Footer from './include/Footer';

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

/* JS */
import './../../vendor/plugins/bootstrap/js/bootstrap.min.js';
import './../../vendor/plugins/animsition/js/animsition.min.js';
import './../../vendor/plugins/own-carousel/owl.carousel.min.js';
import './../../vendor/js/main.js';

class FrontendBootstrap extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Content/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default FrontendBootstrap;