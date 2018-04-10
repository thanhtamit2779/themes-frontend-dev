import * as TYPE from './../contants/action_type';

// HELPER
import request_api from './../../../helper/api';

/*======================================================================
| FETCH THEME DETAIL
| =======================================================================
*/
export const get_theme_detail = theme_detail => {
    return {
        type : TYPE.FETCH_THEME_DETAIL,
        theme_detail
    }
}

export const fetch_theme_detail_request = (theme_id) => {
    return (dispatch) => {
        return request_api(`post/detail/${theme_id}`, {}, 'put').then(function(response) {
            dispatch(get_theme_detail(response.data.data)); 
        });
    }
}