import * as TYPE from './../contants/action_type';

const product_detail = (state = {
        product_detail           : {}
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_PRODUCT_DETAIL:
            return Object.assign({}, state, {
                product_detail        : action.product_detail,
            });
      default:
        return state;
    }
}

export default product_detail;