import axios from "axios"
import Config from "react-native-config"
import authHeader from "../redux/services/authHeader"

const API_URL = Config.API_URL

export const client = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
})

// Add a request interceptor
client.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    return {...config, headers: {...config.headers, ...(await authHeader())}}
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
// client.interceptors.response.use(
//   function (response) {
//     console.log("DEBUG: - file: client.js - line 32 - response", response)
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error)
//   },
// )
