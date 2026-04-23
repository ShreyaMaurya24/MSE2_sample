import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-1zru.onrender.com"
});

export default API;