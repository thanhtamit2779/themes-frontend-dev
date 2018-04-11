import * as TYPE from './../contants/action_type';

const theme_category = (state = {
        items           : []
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_THEME_CATEGORY :
            return Object.assign({}, state, {
                items        : action.theme_category
            });
      default:
        return state;
    }
}

export default theme_category;