import React, {Component} from 'react';

import {
    Row,
    Col,
    Grid,
    Button,
    FormGroup,
    Breadcrumb,
    BreadcrumbItem
} from 'react-bootstrap';

import * as _ from 'lodash';

import {NavLink} from 'react-router-dom';
import ProductList from './../components/ProductList';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class ThemeDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        jQuery('.owl-carousel-related').owlCarousel({
          loop: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            600: {
              items: 3,
              nav: false
            },
            768: {
              items: 3,
              nav: true,
              loop: true,
              margin: 30,
              autoplay: true,
              dots: false,
              lazyLoad: true
            }
          }
        })
    }

    render() {
        let {detail} = this.props;

        let post            = detail.post;
        let post_id         = _.get(post, 'post_id');
        let post_price      = _.get(post, 'post_price');
        let post_title      = _.get(post, 'post_title');
        let mobile_image    = _.get(post, 'mobile_image');
        let desktop_image   = _.get(post, 'desktop_image');
        let post_excerpt    = _.get(post, 'post_excerpt');
        let post_detail     = _.get(post, 'post_detail');
        let post_link       = _.get(post, 'post_link');

        let term            = detail.term;
        let term_id         = _.get(term, 'term_id');
        let term_name       = _.get(term, 'term_name');
        let term_slug       = _.get(term, 'term_slug');
        let link_term       = `/danh-muc/${term_slug}/${term_id}`;

        let post_related = detail.post_related;

        return (
            <section className="main">
                <Grid>
                    <Row>
                        <Col sm={12} xs={12}>
                            <div className="bread-crumb">
                                <NavLink to='/'>
                                    Trang chủ
                                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
                                </NavLink>

                                <NavLink to={link_term}>
                                    {term_name}
                                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
                                </NavLink>

                                <span className="s-text17">
                                    {post_title}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8} xs={12}>
                            <div className="review-image">
                                <img
                                    src={desktop_image}
                                    className="img-responsive desktop-image"
                                    alt={post_title}
                                    title={post_title}/>
                                <div className="phone">
                                    <img
                                        src={mobile_image}
                                        className="img-responsive mobile-image"
                                        alt={post_title}
                                        title={post_title}/>
                                </div>
                            </div>

                            <div className="description">
                                <h2>MÔ TẢ WEBSITE</h2>
                                <div className="post-excerpt">
                                    { ReactHtmlParser(post_excerpt) }
                                </div>
                            </div>

                            <div className="bgwhite p-t-40 p-b-40 related">
                                <div className="sec-title p-b-22">
                                    <h3 className="m-text5 t-center">
                                        THEME LIÊN QUAN
                                    </h3>
                                </div>
                                <div className="sec-content">
                                    <div className="owl-stage owl-carousel owl-carousel-related owl-theme">
                                        <ProductList posts={post_related}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} xs={12}>
                            <h1>{post_title}</h1>

                            <p>Mẫu website: <span>#{post_id}</span></p>
                            <p>Giá: <span>{post_price}</span></p>

                            <FormGroup className="btn-addcart-demo">
                                <button className="btn btn-xs btn-success pull-left">Đặt mua</button>
                                <a className="btn btn-xs btn-success pull-right" href={post_link} target="_blank">Xem thực tế</a>
                            </FormGroup>

                            <div className="clearfix"></div>
                            <hr className="line-full-width clearfix"/>
                            <div className="post-detail">{  ReactHtmlParser(post_detail) }</div>

                            <div className="clearfix"></div>
                            <hr className="line-full-width clearfix"/>
                            <div className="hotline">
                                <h4>TƯ VẤN THIẾT KẾ</h4>
                                <p>Hotline : <a href="tel:01234567899">01234567899</a></p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default ThemeDetail;