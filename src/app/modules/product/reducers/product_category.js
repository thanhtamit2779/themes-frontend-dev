import * as TYPE from './../contants/action_type';

const product_category = (state = {
        items           : []
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_PRODUCT_CATEGORY :
            return Object.assign({}, state, {
                items        : action.product_category
            });
      default:
        return state;
    }
}

export default product_category;