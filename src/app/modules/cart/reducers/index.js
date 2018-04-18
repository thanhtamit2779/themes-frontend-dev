import React, {Component} from 'react';
import * as TYPE from './../contants/action_type';

import * as _ from 'lodash';

var localStorageCarts = JSON.parse(localStorage.getItem('carts'));
var carts             = localStorageCarts ? localStorageCarts : [];
var data              = {
    items           : carts,
    notification    : {}
}

const findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.post_id === product.post_id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

const cart = (state = data , action) => {
    switch (action.type) {
        case TYPE.ADD_CART:
            var product = action.product;
            let index = findProductInCart(carts, product);
            if (index !== -1) {
                carts[index].quantity += 1;
            } else {
                let quantity = 1;
                carts.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('carts', JSON.stringify(carts));

            return Object.assign({}, state, {
                items: carts,
                notification    : `${product.post_title} đã được thêm vào giỏ hàng`
            });

        case TYPE.LIST_CART:
            return Object.assign({}, state, {
                items: carts,
                notification    : 'Giỏ hàng'
            }); 
            
        case TYPE.DELETE_CART:

            let product_id = action.product_id;

            if( _.isEmpty(carts) ) { 
                return Object.assign({}, state, {
                    items: carts,
                    notification    : ''
                });
            } 

            carts.map( (cart, key) => {
                var product = cart.product;
                let cart_id = _.get(product, 'post_id');

                if(cart_id == product_id) {
                    carts.splice(key, 1);
                    var product_name = _.get(product, 'post_title');
                    localStorage.setItem('carts', JSON.stringify(carts));
                }
            });

            return Object.assign({}, state, {
                items: carts,
                notification    : `Sản phẩm đã được xóa ra khỏi giỏ hàng`
            });
            
        default:
            return state;
    }
}

export default cart;