import * as TYPE from './../contants/action_type';

const home_product_latest = (state = {
    items: [],
    notification: {}
}, action) => {
    switch (action.type) {
        case TYPE.FETCH_PRODUCT_LATEST:
            return Object.assign({}, state, {
                notification: {},
                items: action.product_latest
            });
        default:
            return state;
    }
}

export default home_product_latest;