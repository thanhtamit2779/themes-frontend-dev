import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetch_product_detail_request } from './../actions/index';

import ProductDetail from './../components/ProductDetail';

class ProductDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = this.props.id;
        this.props.fetch_product_detail(id);
    }
    
    render() {
        let { detail } = this.props;
        return (<ProductDetail detail={detail}/>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        detail : state.product_detail.product_detail
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetch_product_detail: (product_id) => {
            dispatch(fetch_product_detail_request(product_id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);
