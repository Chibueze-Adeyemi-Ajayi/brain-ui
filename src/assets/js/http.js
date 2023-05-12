import $ from "jquery";
const URL = 'https://brain-api-knps.onrender.com/';

// sending the HTTP POST reqquest
export function sendRequest (url, data, callback) {
    const req_url = URL + url;
    $.post(req_url, data, res => {callback(res)});
}