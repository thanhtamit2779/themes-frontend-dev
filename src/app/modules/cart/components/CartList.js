import React, {Component} from 'react';

import * as _ from 'lodash';
import {Image, Table, Input} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class CartList extends Component {
    constructor(props) {
        super(props);

        this.loadCart = this.loadCart.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    handleChangeEvent(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({[name]: value});
    }

    loadCart(carts) {
        if (_.isEmpty(carts)) 
            return false;
        
        return carts.map((cart, key) => {
            let post_thumbnail  = _.get(cart.product, 'post_thumb');
            let post_title      = _.get(cart.product, 'post_title');
            let post_price      = _.get(cart.product, 'post_price');
            let quantity        = cart.quantity;

            let post_id         = _.get(cart.product, 'post_id');
            let post_slug       = _.get(cart.product, 'post_slug');
            let link_detail     = `/chi-tiet/${post_slug}/${post_id}`;

            return (
                <Table.Row key={key}>
                    <Table.Cell>
                        <NavLink to={link_detail}><Image src={post_thumbnail} size='small'/></NavLink>
                    </Table.Cell>
                    <Table.Cell>
                        <NavLink to={link_detail}>{post_title}</NavLink>
                    </Table.Cell>
                    <Table.Cell>
                        {post_price}
                    </Table.Cell>
                    <Table.Cell>
                        <Input type="number" value={quantity} onChange={ this.handleChangeEvent } name="quantity"/>
                    </Table.Cell>
                    <Table.Cell>{ quantity * post_price }</Table.Cell>
                </Table.Row>
            );
        });
    }

    render() {
        let {carts} = this.props;

        return (
            <React.Fragment>
                {this.loadCart(carts)}
            </React.Fragment>
        );

    }
}

export default CartList;