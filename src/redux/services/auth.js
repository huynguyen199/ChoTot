import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Config from "react-native-config"
const API_URL = Config.API_URL
const register = (email, password) => {
  return axios.post(`${API_URL}users`, {
    email,
    password,
  })
}
const login = (email, password) => {
  return axios
    .post(`${API_URL}auth/login`, {
      email,
      password,
    })
    .then((response) => {
      console.log(
        "DEBUG: - file: auth.js - line 20 - .then - response",
        response,
      )
      if (response.data.accessToken) {
        AsyncStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data
    })
}
const logout = () => {
  AsyncStorage.removeItem("user")
}
const authService = {
  register,
  login,
  logout,
}
export default authService
