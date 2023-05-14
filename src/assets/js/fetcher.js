import { sendRequest } from "./http";

export function fetcher (callback) {
    const url = 'brain/query/';
    const requests = {
        query: "Give a random information",
        role: "assistant"
    }
    sendRequest(url, requests, (status, res) => {
        callback(status, res);
    });
}