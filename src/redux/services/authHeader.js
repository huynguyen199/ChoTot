import AsyncStorage from "@react-native-async-storage/async-storage"

export default function authHeader() {
  const token = JSON.parse(AsyncStorage.getItem("token"))
  if (token) {
    return {Authorization: "Bearer " + token}
  } else {
    return {}
  }
}
