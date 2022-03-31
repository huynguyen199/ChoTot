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
