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
    $(document).ready(function() {

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

      /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      loading: true,
      loadingParentElement: 'html',
      loadingClass: 'animsition-loading-1',
      loadingInner: '<div data-loader="ball-scale"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'html',
      transition: function(url){ window.location.href = url; }
  });
  
  /*[ Back to top ]
  ===========================================================*/
  var windowH = $(window).height()/2;

  $(window).on('scroll',function(){
      if ($(this).scrollTop() > windowH) {
          $("#myBtn").css('display','flex');
      } else {
          $("#myBtn").css('display','none');
      }
  });

  $('#myBtn').on("click", function(){
      $('html, body').animate({scrollTop: 0}, 300);
  });


  /*[ Show header dropdown ]
  ===========================================================*/
  $('.js-show-header-dropdown').on('click', function(){
      $(this).parent().find('.header-dropdown')
  });

  var menu = $('.js-show-header-dropdown');
  var sub_menu_is_showed = -1;

  for(var i=0; i<menu.length; i++){
      $(menu[i]).on('click', function(){ 
          
              if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                  $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                  sub_menu_is_showed = -1;
              }
              else {
                  for (var i = 0; i < menu.length; i++) {
                      $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                  }

                  $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                  sub_menu_is_showed = jQuery.inArray( this, menu );
              }
      });
  }

  $(".js-show-header-dropdown, .header-dropdown").click(function(event){
      event.stopPropagation();
  });

  $(window).on("click", function(){
      for (var i = 0; i < menu.length; i++) {
          $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
      }
      sub_menu_is_showed = -1;
  });


   /*[ Fixed Header ]
  ===========================================================*/
  var posWrapHeader = $('.topbar').height();
  var header = $('.container-menu-header');

  $(window).on('scroll',function(){

      if($(this).scrollTop() >= posWrapHeader) {
          $('.header1').addClass('fixed-header');
          $(header).css('top',-posWrapHeader); 

      }  
      else {
          var x = - $(this).scrollTop(); 
          $(header).css('top',x); 
          $('.header1').removeClass('fixed-header');
      } 

      if($(this).scrollTop() >= 200 && $(window).width() > 992) {
          $('.fixed-header2').addClass('show-fixed-header2');
          $('.header2').css('visibility','hidden'); 
          $('.header2').find('.header-dropdown').removeClass("show-header-dropdown");
          
      }  
      else {
          $('.fixed-header2').removeClass('show-fixed-header2');
          $('.header2').css('visibility','visible'); 
          $('.fixed-header2').find('.header-dropdown').removeClass("show-header-dropdown");
      } 

  });
  
  /*[ Show menu mobile ]
  =====================================================.======*/
  $('.btn-show-menu-mobile').off('click').on('click', function() {
      //$(this).removeClass('btn-show-menu-mobile');
      $(this).toggleClass('is-active');
      //$('.wrap-side-menu').show();
      $('.wrap-side-menu').slideToggle();
  });

  // $('.menu-close').on('click', function() {
  //   console.log(123);
  //   // $(this).removeClass('is-active close-menu');
  //   // $(this).addClass('btn-show-menu-mobile');
  //   // $('.wrap-side-menu').hide();
  // });

  // var arrowMainMenu = $('.arrow-main-menu');

  // for(var i=0; i<arrowMainMenu.length; i++){
  //     $(arrowMainMenu[i]).on('click', function(){
  //         $(this).parent().find('.sub-menu').slideToggle();
  //         $(this).toggleClass('turn-arrow');
  //     })
  // }

  // $(window).resize(function(){
  //     if($(window).width() >= 992){
  //         if($('.wrap-side-menu').css('display') == 'block'){
  //             $('.wrap-side-menu').css('display','none');
  //             $('.btn-show-menu-mobile').toggleClass('is-active');
  //         }
  //         if($('.sub-menu').css('display') == 'block'){
  //             $('.sub-menu').css('display','none');
  //             $('.arrow-main-menu').removeClass('turn-arrow');
  //         }
  //     }
  // });

  /*[ remove top noti ]
  ===========================================================*/
  $('.btn-romove-top-noti').on('click', function(){
      $(this).parent().remove();
  })


  /*[ Block2 button wishlist ]
  ===========================================================*/
  $('.block2-btn-addwishlist').on('click', function(e){
      e.preventDefault();
      $(this).addClass('block2-btn-towishlist');
      $(this).removeClass('block2-btn-addwishlist');
      $(this).off('click');
  });

  /*[ +/- num product ]
  ===========================================================*/
  $('.btn-num-product-down').on('click', function(e){
      e.preventDefault();
      var numProduct = Number($(this).next().val());
      if(numProduct > 1) $(this).next().val(numProduct - 1);
  });

  $('.btn-num-product-up').on('click', function(e){
      e.preventDefault();
      var numProduct = Number($(this).prev().val());
      $(this).prev().val(numProduct + 1);
  });


  /*[ Show content Product detail ]
  ===========================================================*/
  $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
  $('.active-dropdown-content .dropdown-content').slideToggle('fast');

  $('.js-toggle-dropdown-content').on('click', function(){
      $(this).toggleClass('show-dropdown-content');
      $(this).parent().find('.dropdown-content').slideToggle('fast');
  });


  /*[ Play video 01]
  ===========================================================*/
  var srcOld = $('.video-mo-01').children('iframe').attr('src');

  $('[data-target="#modal-video-01"]').on('click',function(){
      $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

      setTimeout(function(){
          $('.video-mo-01').css('opacity','1');
      },300);      
  });

  $('[data-dismiss="modal"]').on('click',function(){
      $('.video-mo-01').children('iframe')[0].src = srcOld;
      $('.video-mo-01').css('opacity','0');
  });
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
