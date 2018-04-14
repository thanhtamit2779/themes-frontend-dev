
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetch_theme_category } from './../actions/index';
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

class ThemeCategoryContainer extends Component {
    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);

        this.state = {
            page,
            activePage
        }
    }

    componentDidMount() {
        let cate_id = this.props.id;
        this.props.fetch_theme_category({
            cate_id,
            total_record,
            page
        });
    }

    // PAGINATION
    handlePagination(page) {
        let cate_id = this.props.id;
        this.setState(
            _.merge(
                { activePage: page }, 
                this.props.fetch_theme_category({
                    total_record,
                    page ,
                    cate_id
                })
            ) 
        );
    } 

    render() {
        let { items } = this.props;
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
        items : state.theme_category.items
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetch_theme_category: (data) => {
            dispatch(fetch_theme_category(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeCategoryContainer);