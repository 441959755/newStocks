

export default {

    sendRequest(options) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    let res = xhr.response;
                    resolve(res);
                }
            }

            xhr.ontimeout = function (ret) {
                reject('ontimeout:' + ret);
            }

            xhr.onerror = function (ret) {
                reject('onerror:' + ret);
            }

            xhr.timeout = options.timeout || 5000;
            let method = options.method || 'GET';

            let url = options.url;
            options.data = options.data || {};



            if (method == 'GET') {
                let str = '';
                for (let k in options.data) {
                    if (str != '?') {
                        str += '&';
                    }
                    str += k + '=' + options.data[k];
                }

                url = url + encodeURI(str);
                xhr.open(method, url, true);
                xhr.send();
            }
            else {
                xhr.open(method, options.url, true);
                // xhr.setRequestHeader('Content-type', 'application/json;charset=uft-8');
                // xhr.send(JSON.stringify(options.data));
                xhr.setRequestHeader('Content-Type', 'application/x-protobuf');
                xhr.responseType = 'arraybuffer';

                xhr.send(options.data);
            }
        })
    }



    // sendRequest(path, data, heandler, err?) {

    //     let xhr = cc.loader.getXMLHttpRequest();

    //     xhr.timeout = 5000;

    //     let str = '';

    //     for (let k in data) {
    //         if (str != '?') {
    //             str += '&';
    //         }
    //         str += k + '=' + data[k];
    //     }

    //     let requestUrl = path + encodeURI(str);

    //     console.log('requestUrl:' + requestUrl);

    //     xhr.open('GET', requestUrl, true);

    //     xhr.onreadystatechange = function () {

    //         if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
    //             try {
    //                 if (heandler != null) {
    //                     heandler(xhr.responseText);
    //                 }
    //             } catch (e) {
    //                 console.log('err:' + e);
    //             }
    //         }
    //     };

    //     xhr.ontimeout = function (ret) {
    //         err && (err(ret));
    //     }

    //     xhr.onerror = function (ret) {
    //         err && (err(ret));
    //     }

    //     xhr.send();

    //     return xhr;

    // }
}