import { sendRequest } from "./http";

export function fetcher () {
    const url = 'brain/query/';
    const requests = {
        query: "Give a random information",
        role: "assistant"
    }
    sendRequest(url, requests, (status, res) => {
        console.log(res);
        console.log("Thank you");
    });
}