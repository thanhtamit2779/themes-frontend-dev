import * as TYPE from './../contants/action_type';

const home_product_featured = (state = {
        items           : [],
        notification    : {}
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_PRODUCT_FEATURED:
            return Object.assign({}, state, {
                notification: {},
                items       : action.product_featured,
            });
            
        default:
            return state;
    }
}

export default home_product_featured;