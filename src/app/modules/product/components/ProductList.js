import React, {Component} from 'react';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import * as _ from 'lodash';

import { addCart } from './../../cart/actions/index';

import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdded: false
        }
    }

    componentWillReceiveProps(nextProps) {
        let message = nextProps.notification;
    }

    handleAddCart(product) {
        let { addCart } = this.props;
        addCart(product);

        this.setState({
            isAdded: true
        }, function(){
            setTimeout(() => {
                this.setState({
                    isAdded: false
                });
            }, 2000);
        });
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

            return (
                <div className={ className } key={key}>
                    <div className="block2">
                        <div className="block2-img wrap-pic-w of-hidden pos-relative">
                            <img src={post.post_thumb} alt={post_title} title={post_title}/>
                            <div className="block2-overlay trans-0-4">
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                    { (this.state.isAdded == false) ? 
                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onClick={ () => this.handleAddCart(post) }>
                                            Thêm vào giỏ
                                        </button>
                                        :
                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4 is-added">
                                            Đang thêm...
                                        </button>
                                    }
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

const mapStateToProps = (state, ownProps) => {
    return { 
        items         : state.cart.items,
        notification  : state.cart.notification
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addCart: (product) => {
            dispatch(addCart(product));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);