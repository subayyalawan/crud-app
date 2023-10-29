import axios from "axios";

const instance = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "https://653a7f212e42fd0d54d401bd.mockapi.io",
});

export const get = (url, prams) => instance.get(url, { prams });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const del = (url) => instance.delete(url);
