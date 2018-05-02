import axios from 'axios'; 
import qs from 'qs'; 

// CONFIG
import API from './../config/api';

export default function request_api(url, data = null, method = 'post') {
    return axios({ 
        method: method, 
        url: url, 
        data: qs.stringify(data),
        baseURL: API.url,
        proxy: {
            host    : 'ftp.freevnn.com',
            auth    : {
                username: 'freev_13645580',
                password: '27071994'
            }
        }, 
        responseType: 'json',
        headers: {
            'Accept'                        : 'application/json',
            //'Access-Control-Allow-Origin'   : '*',
            'Content-Type'                  : 'application/x-www-form-urlencoded',
            'X-Requested-With'              : 'XMLHttpRequest'
        }
    }).catch(function (error) { 
        console.log(error); 
    }); 
}
