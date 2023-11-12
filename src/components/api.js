import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3030/api",
  withCredentials: true
});

export default api;