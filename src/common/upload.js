import authHeader from "../redux/services/authHeader"
import Config from "react-native-config"
import {client} from "./client"

const API_URL = Config.API_URL

export const uploadImage = async (formData) => {
  return client({
    url: `${API_URL}upload`,
    method: "post",
    data: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      ...(await authHeader()),
    },
    transformRequest: (data, headers) => {
      return formData
    },
  })
    .then((res) => {
      return res
    })
    .catch((error) => {
      console.log("error from image :", error)
    })
}
