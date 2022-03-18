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
      if (response.data.accessToken) {
        AsyncStorage.setItem("token", JSON.stringify(response.data.accessToken))
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
