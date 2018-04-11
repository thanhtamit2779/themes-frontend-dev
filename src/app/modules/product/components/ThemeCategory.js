import React, {Component} from 'react';

import {
    Row,
    Col,
    Grid
} from 'react-bootstrap';

import {NavLink} from 'react-router-dom';
import ProductList from './../components/ProductList';

import * as _ from 'lodash';

class ThemeCategory extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {}

    render() {
        let { items } = this.props;
        let posts     = items.posts;
        let term      = items.term;
        let term_name = _.get(term, 'term_name');

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

                                <span className="s-text17">
                                    { term_name }
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <ProductList posts={posts} col="col-sm-3 col-xs-6"/>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default ThemeCategory;