import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import * as _ from 'lodash';
import {Table} from 'semantic-ui-react';

import {
    Row,
    Col,
    Grid,
    Button,
    FormGroup,
    Breadcrumb,
    BreadcrumbItem
} from 'react-bootstrap';

import CartList from './CartList';

let localStorageCarts = JSON.parse(localStorage.getItem('carts'));
let carts = (_.isEmpty(localStorageCarts))
            ? []
            : localStorageCarts;

class ViewCart extends Component {
    constructor(props) {
        super(props);

        this.calTotalCart = this.calTotalCart.bind(this);
    }

    calTotalCart(carts) {
        if (_.isEmpty(carts)) return false;

        var quantity            = 0;
        var total               = 0;
        carts.map((cart, key) => {
            quantity        = cart.quantity;
            total           += quantity;
        });

        return total;
    }

    calTotalPrice(carts) {
        if (_.isEmpty(carts)) return false;

        var price               = 0;
        var total               = 0;
        var quantity            = 0;
        carts.map((cart, key) => {
            quantity        = cart.quantity;
            price           = _.get(cart.product, 'post_price') ;
            total           += (price * quantity);
        });

        return total;
    }

    render() {
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
                                    Giỏ hàng
                                </span>
                            </div>
                        </Col>
                    </Row>

                    <Row className="p-t-30 p-b-25">
                        <Col sm={8} xs={12}>
                            <Table basic='very'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2'>Bạn có { this.calTotalCart(carts) } sản phẩm</Table.HeaderCell>
                                        <Table.HeaderCell>Đơn giá</Table.HeaderCell>
                                        <Table.HeaderCell>Số lượng</Table.HeaderCell>
                                        <Table.HeaderCell>Thành tiền</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <CartList carts={carts}/>
                                </Table.Body>
                            </Table>
                        </Col>
                        <Col sm={4} xs={12}>
                            <div className="info-cart card">
                                <h2>Thông tin đơn hàng</h2>
                                <p><span className="pull-left">Tạm tính ({ this.calTotalCart(carts)} sản phẩm)</span><span className="pull-right">{ this.calTotalPrice(carts)}</span></p>
                                <p><span className="pull-left">Phí giao hàng</span><span className="pull-right">27,000 đ</span></p>
                                <p><span className="pull-left">Tổng cộng</span><span className="pull-right">{ this.calTotalPrice(carts) + 27000}</span></p>
                                <NavLink to='/thanh-toan' className="s-text17 checkout">Tiến hành thanh toán</NavLink>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default ViewCart;