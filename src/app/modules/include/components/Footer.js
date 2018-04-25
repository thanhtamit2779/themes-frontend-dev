import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { fetch_categories } from './../actions/index';

import menu from './../../config/menu';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  // FETCH API
  componentDidMount() {
    this.props.fetch_categories({
      per_page     : 5,
      resize       : 1,
      resize_width : 45,
      resize_height: 30
    });
  }

  componentDidUpdate() {
    // SCROLL TO TOP
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('#to-top').css('display', 'block'); 
      } else {
        $('#to-top').css('display', 'none');
      }
    });
      
    $('#to-top').on('click', function () {
          $('html, body').animate({scrollTop: '0px'}, 800);
          return false;
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

  // MENU
  menu(menu) {
    if(menu.length === 0) return false;

    var { toggleVisibility, stateVisible } = this.props;

    return menu.map( (item, key) => {
      return (item.click == false) ?
            <Route key={key} path={item.path} children={({ match }) => (
              <li className={ match ? 'nav-item active' : 'nav-item' }>
                <NavLink to={item.path} className={ match ? 'nav-link active' : 'nav-link' }>
                  {item.name}
                </NavLink>
              </li>
            )}/> 
         :
         <Route key={key} path={item.path} children={({ match }) => (
          <li className={ match ? 'nav-item active' : 'nav-item' }>
            <NavLink to={item.path} className={ match ? 'nav-link active' : 'nav-link' } onClick={ () => toggleVisibility() }>
              {item.name}
            </NavLink>
          </li>
        )}/>
    });
  }

  render() {
    let { items, toggleVisibility }   = this.props;
    let { terms }   = items;
    let categories  = terms;

    return (
      <React.Fragment>
        <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45 footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-xs-12">
                <h4 className="s-text12 p-b-30">
                  THÔNG TIN
                </h4>
                <div>
                  <p>
                      <span className="tit-name"><i className="fa fa-map-marker"></i> </span>
                      <span className="tit-contain">Address 1</span>
                    </p>

                    <p>
                      <span className="tit-name"><i className="fa fa-phone"></i> </span>
                      <span className="tit-contain">123456789</span>
                    </p>  

                    <p>
                      <span className="tit-name"><i className="fa fa-envelope"></i> </span>
                      <span className="tit-contain">thanhtam.it2779@gmail.com</span>
                    </p>    
                  <div className="flex-m p-t-30">
                    <a href="#" className="fs-18 color1 p-r-20 fa fa-facebook" />
                    <a href="#" className="fs-18 color1 p-r-20 fa fa-instagram" />
                    <a href="#" className="fs-18 color1 p-r-20 fa fa-pinterest-p" />
                    <a href="#" className="fs-18 color1 p-r-20 fa fa-snapchat-ghost" />
                    <a href="#" className="fs-18 color1 p-r-20 fa fa-youtube-play" />
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <h4 className="s-text12 p-b-10">
                  DANH MỤC
                </h4>
                <ul>
                  { this.categories(categories) }
                </ul>
              </div>
              <div className="col-sm-2 col-xs-12">
                <h4 className="s-text12 p-b-10">
                  MENU
                </h4>
                <ul>
                  { this.menu(menu)}
                </ul>
              </div>
              <div className="col-sm-4 col-xs-12">
                <h4 className="s-text12 p-b-10">
                  HỖ TRỢ
                </h4>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthanhtam.it2779%2F&tabs&width=290&height=220&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1008059442661946" width="340" height="220" style={ {'border' : 'none', 'overflow':'hidden' }} scrolling="no" frameBorder="0" allowtransparency="true" />
              </div>
            </div>  
          </div>
        </footer>
        <div className="scroll-totop" id="to-top">
          <span className="fa fa-arrow-up"/>
        </div>
        <div className="hidden-xs">
          <a className="click-phone" href="tel: +0123.456.7899">
            <div className="quick-alo-phone quick-alo-green quick-alo-show" id="quick-alo-phoneIcon" style={{right: '5px', bottom: '0px' }}>
              <div className="info topopup">
                <div className="quick-alo-ph-circle"></div>
                <div className="quick-alo-ph-circle-fill"></div>
                <div className="quick-alo-ph-img-circle"><i className="fa fa-phone" aria-hidden="true"/></div>
              </div>
            </div>
          </a>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
