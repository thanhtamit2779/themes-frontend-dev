
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetch_product } from './../actions/index';
import * as _ from 'lodash';

import { Message } from 'semantic-ui-react';
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

class ProductSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);

        this.state = {
            page,
            activePage
        }
    }

    componentDidMount() {
        let dataSearch  = this.props.dataSearch;
        this.props.fetch_product(
            _.merge(dataSearch, { 
                total_record,
                page
            }));
    }

    // PAGINATION
    handlePagination(page) {
        let dataSearch  = this.props.dataSearch;
        this.setState(
            _.merge(
                { activePage: page }, 
                this.props.fetch_product(
                    _.merge(dataSearch, { 
                        total_record,
                        page
                    }))
            ) 
        );
    } 

    render() {
        let { items } = this.props;

        if( _.isEmpty(items)  == true) {
            return (<section className="main">
                <Grid>
                    <Row>
                        <Col sm={12} xs={12}>
                            <div className="bread-crumb bgwhite flex-w p-t-30">
                                <NavLink to='/' className="s-text17">
                                    Trang chủ
                                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
                                </NavLink>

                                <span className="s-text17">
                                    Tìm kiếm
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Grid>  
                <Grid>  
                    <Row className="p-t-30 p-b-25">
                        <Message warning>
                            <Message.Header>You must register before you can do that!</Message.Header>
                            <p>Visit our registration page, then try again.</p>
                        </Message>
                    </Row>
                </Grid>
                </section>
            )
        }

        let posts     = items.posts;
        let { total } = items;

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
                                <NavLink to='/' className="s-text17">
                                    Trang chủ
                                    <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"/>
                                </NavLink>

                                <span className="s-text17">
                                    { term_name }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearchContainer);