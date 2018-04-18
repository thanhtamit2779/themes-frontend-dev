import React, {Component} from 'react';

import { connect } from 'react-redux';

import {NavLink} from 'react-router-dom';

import * as _ from 'lodash';
import {Table, Message} from 'semantic-ui-react';
import { listCart, deleteCart } from './../actions/index';

import {
    Row,
    Col,
    Grid,
    Button,
    FormGroup,
    Breadcrumb,
    BreadcrumbItem,
    Form
} from 'react-bootstrap';

import CartList from './CartList';

class ViewCart extends Component {
    constructor(props) {
        super(props);

        this.calTotalCart = this.calTotalCart.bind(this);
        this.calTotalPrice = this.calTotalPrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteCart  = this.handleDeleteCart.bind(this);
    }

    componentDidMount() {
        this.props.listCart();
    }

    componentWillReceiveProps(nextProps) {
        let message = nextProps.notification;
        if( _.isEmpty(message)) return false;
        this.props.listCart();
    }

    calTotalCart(carts) {
        if (_.isEmpty(carts)) return 0;

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

    handleSubmit(event) {
        event.preventDefault();
    }

    handleDeleteCart(product_id) {
        this.props.deleteCart(product_id);
    }

    render() {
        const carts          = this.props.items;
                
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
                            { _.isEmpty(carts) ? 
                                <Message negative>
                                    <Message.Header>Bạn chưa có sản phẩm nào trong giỏ hàng</Message.Header>
                                    <p>Click vào <NavLink to="/">đây</NavLink> để mua hàng</p>
                                </Message> :  
                                <Form horizontal method="post" id="view-cart" onSubmit={this.handleSubmit} encType="multipart/form-data" acceptCharset="utf-8" >
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
                                            <CartList carts={carts} handleDeleteCart={this.handleDeleteCart}/>
                                        </Table.Body>
                                    </Table>
                                </Form>
                            }
                        </Col>
                        <Col sm={4} xs={12}>
                            { _.isEmpty(carts) ? '' : 
                            <div className="info-cart card">
                                <h2>Thông tin đơn hàng</h2>
                                <p><span className="pull-left">Tạm tính ({ this.calTotalCart(carts)} sản phẩm)</span><span className="pull-right">{ this.calTotalPrice(carts)}</span></p>
                                <p><span className="pull-left">Phí giao hàng</span><span className="pull-right">27,000 đ</span></p>
                                <p><span className="pull-left">Tổng cộng</span><span className="pull-right">{ this.calTotalPrice(carts) + 27000}</span></p>
                                <NavLink to='/thanh-toan' className="s-text17 checkout">Tiến hành thanh toán</NavLink>
                            </div>
                            }
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        items         : state.cart.items,
        notification  : state.cart.notification
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        listCart: () => {
            dispatch(listCart());
        },
        deleteCart: (product_id) => {
            dispatch(deleteCart(product_id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);