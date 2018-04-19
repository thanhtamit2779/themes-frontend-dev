import * as TYPE from './../contants/action_type';

const product = (state = {
        items           : []
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_PRODUCT :
            return Object.assign({}, state, {
                items        : action.product
            });
      default:
        return state;
    }
}

export default product;