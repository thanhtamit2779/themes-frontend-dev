import * as TYPE from './../contants/action_type';

const home_product_viewed = (state = {
    items: [],
    notification: {}
}, action) => {
    switch (action.type) {
        case TYPE.FETCH_PRODUCT_VIEWED:
            return Object.assign({}, state, {
                notification: {},
                items: action.product_viewed
            });
        default:
            return state;
    }
}

export default home_product_viewed;