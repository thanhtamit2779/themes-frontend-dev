import * as TYPE from './../contants/action_type';

// HELPER
import request_api from './../../../helper/api';

/*======================================================================
| FETCH THEME DETAIL
| =======================================================================
*/
export const get_product_detail = product_detail => {
    return {
        type : TYPE.FETCH_PRODUCT_DETAIL,
        product_detail
    }
}

export const fetch_product_detail_request = (product_id) => {
    return (dispatch) => {
        return request_api(`post/detail/${product_id}`, {}, 'put').then(function(response) {
            dispatch(get_product_detail(response.data.data)); 
        });
    }
}

/*======================================================================
| FETCH THEME IN CATEGORY
| =======================================================================
*/
export const get_product_category = (product_category) => {
    return {
        type : TYPE.FETCH_PRODUCT_CATEGORY,
        product_category
    }
}

export const fetch_product_category = (data) => {
    return dispatch => {
        return request_api('post/index', data).then(function(response) {
            dispatch(get_product_category(response.data.data)); 
        });
    }
}