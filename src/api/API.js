import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/",
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
});

export default API;
