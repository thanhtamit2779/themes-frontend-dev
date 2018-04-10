import * as TYPE from './../contants/action_type';

const home_theme_latest = (state = {
    items: [],
    notification: {}
}, action) => {
    switch (action.type) {
        case TYPE.FETCH_THEME_LATEST:
            return Object.assign({}, state, {
                notification: {},
                items: action.theme_latest
            });
        default:
            return state;
    }
}

export default home_theme_latest;