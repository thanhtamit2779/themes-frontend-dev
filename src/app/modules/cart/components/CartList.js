import React, {Component} from 'react';

import { connect } from 'react-redux';

import * as _ from 'lodash';
import { Image, Table, Input} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import { deleteCart } from './../actions/index';

class CartList extends Component {
    constructor(props) {
        super(props);

        this.loadCart          = this.loadCart.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.handleDeleteCart  = this.handleDeleteCart.bind(this);
    }

    handleChangeEvent(event) {
        let target = event.target;
        let name   = target.name;
        let value  = target.value;

        this.setState({[name]: value});
    }

    handleDeleteCart(product_id) {
        this.props.handleDeleteCart(product_id);
    }

    loadCart(carts) {
        if (_.isEmpty(carts)) 
            return false;

        const handleDeleteCart = this.props;
        
        return carts.map((cart, key) => {
            let post_thumbnail  = _.get(cart.product, 'post_thumb');
            let post_title      = _.get(cart.product, 'post_title');
            let post_price      = _.get(cart.product, 'post_price');
            let quantity        = cart.quantity;

            let post_id         = _.get(cart.product, 'post_id');
            let post_slug       = _.get(cart.product, 'post_slug');
            let link_detail     = `/chi-tiet/${post_slug}/${post_id}`;

            let name            = `quantity[${post_id}]`;

            return (
                <Table.Row key={key}>
                    <Table.Cell>
                        <NavLink to={link_detail}><Image src={post_thumbnail} size='small' className="thumbnail"/></NavLink>
                    </Table.Cell>
                    <Table.Cell>
                        <NavLink to={link_detail} className="name">{post_title}</NavLink>
                    </Table.Cell>
                    <Table.Cell>
                        <NumberFormat value={post_price} displayType={'text'} thousandSeparator={true}/>
                    </Table.Cell>
                    <Table.Cell>
                        <Input type="number" ref="quantity" className="quantity" value={quantity} onChange={ this.handleChangeEvent } name={name} />
                    </Table.Cell>
                    <Table.Cell>
                        <NumberFormat value={ quantity * post_price } displayType={'text'} thousandSeparator={true}/> 
                    </Table.Cell>
                    <Table.Cell>
                        <NavLink to="#" onClick={ () => this.handleDeleteCart(post_id) }>
                            <i className="fa fa-trash-o" aria-hidden="true"/>
                        </NavLink>
                    </Table.Cell>
                </Table.Row>
            );
        });
    }

    render() {
        let { carts } = this.props;

        return (
            <React.Fragment>
                { this.loadCart(carts) }
            </React.Fragment>
        );

    }
}

export default CartList;