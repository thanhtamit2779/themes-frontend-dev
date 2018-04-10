import * as TYPE from './../contants/action_type';

const home_banner = (state = {
        items           : [],
        notification    : {}
    }, action) => {
    switch (action.type) {
        case TYPE.FETCH_BANNER:
            return Object.assign({}, state, {
                notification: {},
                items       : action.banners,
            });
      default:
        return state;
    }
}

export default home_banner;