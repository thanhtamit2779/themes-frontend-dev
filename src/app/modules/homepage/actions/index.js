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
export const get_product_featured = product_featured => {
    return {
      type: TYPE.FETCH_PRODUCT_FEATURED,
      product_featured
    }
}

export const fetch_product_featured = (data) => {
    return (dispatch) => {
        return request_api('post/index', data).then(response => {
            dispatch(get_product_featured(response.data.data));
        });
    }  
}

/*======================================================================
| FETCH THEME LATEST 
| =======================================================================
*/
export const get_product_latest = product_latest => {
    return {
      type: TYPE.FETCH_PRODUCT_LATEST,
      product_latest
    }
}

export const fetch_product_latest = (data) => {
    return (dispatch) => {
        return request_api('post/index', data).then(response => {
            dispatch(get_product_latest(response.data.data));
        });
    }  
}

/*======================================================================
| FETCH THEME VIEWED
| =======================================================================
*/
export const get_product_viewed = product_viewed => {
    return {
      type: TYPE.FETCH_PRODUCT_VIEWED,
      product_viewed
    }
}

export const fetch_product_viewed = (data) => {
    return (dispatch) => {
        return request_api('post/index', data).then(response => {
            dispatch(get_product_viewed(response.data.data));
        });
    }  
}
