import * as TYPE from './../contants/action_type';

const home_theme_viewed = (state = {
    items: [],
    notification: {}
}, action) => {
    switch (action.type) {
        case TYPE.FETCH_THEME_VIEWED:
            return Object.assign({}, state, {
                notification: {},
                items: action.theme_viewed
            });
        default:
            return state;
    }
}

export default home_theme_viewed;