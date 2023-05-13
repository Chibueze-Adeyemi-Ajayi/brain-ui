import { sendRequest } from "./http";

export function fetcher (callback) {
    const url = 'brain/query/';
    const requests = {
        query: "Give a random information",
        role: "assistant"
    }
    sendRequest(url, requests, (status, res) => {
        console.log(res);
        callback(true) // navigating off home route
        console.log("Thank you");
    });
}