// LIBS
import * as _ from 'lodash';
import { NotificationManager } from 'react-notifications';

export default function notification(data) {
    if(_.isEmpty(data)) return false;
    var result = '';

    if(data.status === 1) {
        result = NotificationManager.success(data.msg, '', 5000);
    }
    else {
        result = NotificationManager.error(data.msg, '', 5000);
    }

    return result;
}