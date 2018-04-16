import * as TYPE from './../contants/action_type';

// HELPER
import request_api from './../../../helper/api';

/*======================================================================
| FETCH CATEGORY
| =======================================================================
*/
export const get_categories = categories => {
    return {
      type: TYPE.FETCH_CATEGORY,
      categories
    }
}

export const fetch_categories = (data) => {
    return (dispatch) => {
        return request_api('term/index', data).then(response => {
            dispatch(get_categories(response.data.data));
        });
    }  
}