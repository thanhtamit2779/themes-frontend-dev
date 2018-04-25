
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetch_product } from './../actions/index';
import * as _ from 'lodash';

import {
    Row,
    Col,
    Grid
} from 'react-bootstrap';

import {NavLink} from 'react-router-dom';
import ProductList from './../components/ProductList';

import Pagination from "react-js-pagination";

const total_record = 8;
const page         = 1;
const activePage   = 1;

class ProductTypeContainer extends Component {
    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);

        this.state = {
            page,
            activePage
        }
    }

    componentDidMount() {
        var type = this.props.type;
        if(type == 'moi-nhat') {
            type = 'latest';
        }
        else if(type == 'noi-bat') {
            type = 'featured';
        }
        else if(type == 'xem-nhieu'){
            type = 'viewed';
        }

        this.props.fetch_product({
            type,
            total_record,
            page
        });
    }

    // PAGINATION
    handlePagination(page) {
        var type = this.props.type;
        if(type == 'moi-nhat') {
            type = 'latest';
        }
        else if(type == 'noi-bat') {
            type = 'featured';
        }
        else if(type == 'xem-nhieu'){
            type = 'viewed';
        }

        this.setState(
            _.merge(
                { activePage: page }, 
                this.props.fetch_product({
                    total_record,
                    page ,
                    type
                })
            ) 
        );
    } 

    render() {
        let { items, type } = this.props;
        let posts     = items.posts;
        let { total } = items;

        var breadcrumb = '';
        if(type == 'moi-nhat') {
            breadcrumb = 'Mới nhất';
        }
        else if(type == 'noi-bat') {
            breadcrumb = 'Nổi bật';
        }
        else if(type == 'xem-nhieu'){
            breadcrumb = 'Xem nhiều';
        }

        var pagination = '';
        if(items.total_page > 1) {
            pagination = (<Row>
            <Col sm={12} xs={12}>
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={total_record}
                        totalItemsCount={total}
                        pageRangeDisplayed={3}
                        onChange={this.handlePagination}
                        activeClass="active"
                        activeLinkClass=""
                        itemClass="page-item"
                        linkClass="page-link"
                        innerClass="pagination d-flex justify-content-center"
                        firstPageText="Trang đầu"
                        lastPageText="Trang cuối"
                    />
                </div>
            </Col>
        </Row>)
        }
     
        let term      = items.term;
        let term_name = _.get(term, 'term_name');

        return (
            <section className="main">
                <Grid>
                    <Row>
                        <Col sm={12} xs={12}>
                            <div className="bread-crumb bgwhite flex-w p-t-30">
                                <NavLink to='/'>
                                    Trang chủ
                                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
                                </NavLink>

                                <NavLink to='/san-pham'>
                                    Sản phẩm
                                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
                                </NavLink>

                                <span>
                                    { breadcrumb }
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Grid>  
                <Grid>  
                    <Row className="p-t-30 p-b-25">
                        <ProductList posts={posts} col="col-sm-3 col-xs-6"/>
                    </Row>
                    { pagination }
                </Grid>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        items : state.product.items
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetch_product: (data) => {
            dispatch(fetch_product(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTypeContainer);