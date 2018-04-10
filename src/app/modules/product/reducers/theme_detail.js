import * as TYPE from './../contants/action_type';

const theme_detail = (state = {
        theme_detail           : {}
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_THEME_DETAIL:
            return Object.assign({}, state, {
                theme_detail        : action.theme_detail,
            });
      default:
        return state;
    }
}

export default theme_detail;