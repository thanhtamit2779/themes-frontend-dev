import axios from 'axios'; 
import fetch from 'cross-fetch';
import qs from 'qs'; 

// CONFIG
import API from './../config/api';

export default function request_api(url, data = null, method = 'post') {
    return axios({ 
        method: method, 
        url: url, 
        data: qs.stringify(data),
        baseURL: API.url,
        timeout: 1000,

        withCredentials: false, // default
        responseType: 'json',
        responseEncoding: 'utf8', // default
        headers: {
            'Accept'                        : 'application/json',
            //'Access-Control-Allow-Origin'   : '*',
            'Content-Type'                  : 'application/x-www-form-urlencoded',
            // 'X-Requested-With'              : 'XMLHttpRequest',
            // 'X-Custom-Header': 'foobar'
        }
    }).catch(function (error) { 
        console.log(error); 
    }); 
}

