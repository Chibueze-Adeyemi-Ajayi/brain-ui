import { sendRequest } from "./http";

export function fetcher () {
    console.log("processing ....");
    const url = 'brain/query/';
    const requests = {
        query: "prompt engineering",
        role: "assistant"
    }
    sendRequest(url, requests, res => {
        console.log(res);
        console.log("Thank you");
    });
}