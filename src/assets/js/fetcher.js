import { sendRequest } from "./http";

export function fetcher () {
    const url = 'brain/query/';
    const requests = {
        query: "prompt engineering",
        role: "assistant"
    }
    sendRequest(url, requests, (status, res) => {
        console.log(res);
        console.log("Thank you");
    });
}