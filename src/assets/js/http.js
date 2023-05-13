import $ from "jquery";
const URL = 'https://brain-api-knps.onrender.com/';

// sending the HTTP POST reqquest
export function sendRequest (url, data, callback) {
    console.log("processing ....");
    const req_url = URL + url;
    $.post(req_url, data)
     .progress((pos) => console.log(pos))
     .catch(err => callback(status, err))
     .then(res => callback(status, res));
}