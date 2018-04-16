import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';
import * as _ from 'lodash';

const localStorageCarts = JSON.parse(localStorage.getItem('shoppingCart'));
const carts             = ( _.isEmpty(localStorageCarts) ) ? [] : localStorageCarts;

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.findProductInCart = this.findProductInCart.bind(this);
    }

    findProductInCart(cart, product) {
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

    handleAddCart(product) {
        let index = this.findProductInCart(carts, product);
        if (index !== -1) {
            carts[index].quantity += 1;
        } else {
            let quantity = 1;
            carts.push({
                product,
                quantity
            });
        }
        localStorage.setItem('shoppingCart', JSON.stringify(carts));
    }


    load(posts, col = '') {
        if (_.isEmpty(posts)) 
            return false;

        var className   = 'item';
        if(col.length != 0) className = `item ${col}`;

        return posts.map((post, key) => {
            let post_id     = post.post_id;
            let post_title  = post.post_title;
            let post_thumb  = post.post_thumb;
            let link_detail = `/chi-tiet/${post.post_slug}/${post_id}`;

            let set_cart    = {
                'post_id'           : post_id,
                'post_title'        : post_title,
                'post_thumbnail'    : post_thumb  
            }

            return (
                <div className={ className } key={key}>
                    <div className="block2">
                        <div className="block2-img wrap-pic-w of-hidden pos-relative">
                            <img src={post.post_thumb} alt={post_title} title={post_title}/>
                            <div className="block2-overlay trans-0-4">
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                    {/* Button */}
                                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onClick={ () => this.handleAddCart(post) }>
                                        ĐẶT MUA
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="block2-txt p-t-20 text-center">
                            <NavLink to={link_detail} className="text-center block2-name dis-block s-text3 p-b-5">
                                {post_title}
                            </NavLink>
                            <span className="block2-price m-text6 p-r-5">
                                {post.post_price} VNĐ
                            </span>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        const { posts, col } = this.props;

        return (                     
            <React.Fragment>
                { this.load(posts, col) }
            </React.Fragment>   
        );
    }
}

export default ProductList;