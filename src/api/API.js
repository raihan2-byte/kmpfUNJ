import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-production-38d3.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

export default API;
