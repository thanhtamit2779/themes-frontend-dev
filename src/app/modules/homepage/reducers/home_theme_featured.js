import * as TYPE from './../contants/action_type';

const home_theme_featured = (state = {
        items           : [],
        notification    : {}
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_THEME_FEATURED:
            return Object.assign({}, state, {
                notification: {},
                items       : action.theme_featured,
            });
            
        default:
            return state;
    }
}

export default home_theme_featured;