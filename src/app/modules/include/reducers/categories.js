import * as TYPE from './../contants/action_type';

const categories = (state = {
        items           : [],
        notification    : {}
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_CATEGORY:
            return Object.assign({}, state, {
                notification: {},
                items       : action.categories,
            });
      default:
        return state;
    }
}

export default categories;