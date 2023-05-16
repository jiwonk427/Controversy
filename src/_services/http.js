import axios from "axios";

export const http = axios.create({
    baseURL: "http://52.78.13.239:10001",
    headers: {
        "Content-Type": "application/json",
    },
});

http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
