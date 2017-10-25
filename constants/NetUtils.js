import React from 'react';

class NetUtils extends React.Component {

    static get(url, params, callback) {
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        fetch(url, {
            method: 'GET',
        }).then((response) => {
            callback(response)
        }).done();
    }

    static post(url, headers, body, callback) {
        //fetch请求
        let _headers = {};
        if (headers && headers.length > 0) {
            for (let i = 0, len = headers.length; i < len; i++) {
                let ss = headers[i].split('=');
                _headers[ss[0]] = _headers[ss[1]];
            }
        }
        fetch(url, {
            method: 'POST',
            headers: _headers,
            body: body
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                callback(responseJSON)
            }).done();
    }
}