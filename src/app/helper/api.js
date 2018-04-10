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
            host: 'localhost',
            port: 80,
        }, 
        responseType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).catch(function (error) { 
        console.log(error); 
    }); 
}
