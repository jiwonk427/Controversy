import axios from "axios";

export const http = axios.create({
    baseURL: "https://api.alltest.kr",
    headers: {
        "Content-Type": "application/json",
    },
});

http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
