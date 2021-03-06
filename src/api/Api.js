import axios from "axios";
import { handleResponse, handleError } from "./utils";

const baseURL = "http://localhost:8080/api/eservice"

const axiosInstance =  axios.create({
   baseURL,
  validateStatus: function (status) {
    return status >= 200 && status < 404; // default
  }});

export const login = (data) =>
axiosInstance
    .post(`/login`, data)
    .then(handleResponse)
    .catch(handleError);