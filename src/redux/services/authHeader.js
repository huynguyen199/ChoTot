import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function authHeader() {
  const token = await AsyncStorage.getItem("token")

  if (token) {
    return {Authorization: `Bearer ${token}`}
  } else {
    return {}
  }
}
