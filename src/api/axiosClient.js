import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8888/api",
  headers: { "Content-Type": "multipart/form-data; charset=UTF-8"},
});
