import * as TYPE from './../contants/action_type';

// HELPER
import request_api from './../../../helper/api';

/*======================================================================
| FETCH BANNER
| =======================================================================
*/
export const get_banners = banners => {
    return {
      type: TYPE.FETCH_BANNER,
      banners
    }
}

export const fetch_banners = (data) => {
    return (dispatch) => {
        return request_api('term/index', data).then(response => {
            dispatch(get_banners(response.data.data));
        });
    }  
}

/*======================================================================
| FETCH THEME FEATURED 
| =======================================================================
*/
export const get_theme_featured = theme_featured => {
    return {
      type: TYPE.FETCH_THEME_FEATURED,
      theme_featured
    }
}

export const fetch_theme_featured = (data) => {
    return (dispatch) => {
        return request_api('post/index', data).then(response => {
            dispatch(get_theme_featured(response.data.data));
        });
    }  
}

/*======================================================================
| FETCH THEME LATEST 
| =======================================================================
*/
export const get_theme_latest = theme_latest => {
    return {
      type: TYPE.FETCH_THEME_LATEST,
      theme_latest
    }
}

export const fetch_theme_latest = (data) => {
    return (dispatch) => {
        return request_api('post/index', data).then(response => {
            dispatch(get_theme_latest(response.data.data));
        });
    }  
}

/*======================================================================
| FETCH THEME VIEWED
| =======================================================================
*/
export const get_theme_viewed = theme_viewed => {
    return {
      type: TYPE.FETCH_THEME_VIEWED,
      theme_viewed
    }
}

export const fetch_theme_viewed = (data) => {
    return (dispatch) => {
        return request_api('post/index', data).then(response => {
            dispatch(get_theme_viewed(response.data.data));
        });
    }  
}
