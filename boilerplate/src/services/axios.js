import axios from "axios";
const USER_TOKEN = localStorage.getItem("token");

const api = axios.create({
  baseURL: "URL_PROJECT",
  timeout: 5000,
  headers: {
    Authorization: USER_TOKEN ? `bearer ${USER_TOKEN}` : "",
    "Content-Type": "application/json",
  },
});

export default api;
