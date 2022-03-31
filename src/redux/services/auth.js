import AsyncStorage from "@react-native-async-storage/async-storage"
import {client} from "@common/client"

const register = (email, password) => {
  return client.post("users", {
    email,
    password,
  })
}
const login = (email, password) => {
  return client
    .post(`auth/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        AsyncStorage.setItem("token", response.data.access_token)
      }
      return response.data
    })
}
const logout = () => {
  AsyncStorage.removeItem("token")
}
const authService = {
  register,
  login,
  logout,
}
export default authService
