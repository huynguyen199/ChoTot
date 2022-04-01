import authHeader from "../redux/services/authHeader"
import {client} from "./client"

export const uploadImage = async (formData) => {
  return await client({
    url: `upload`,
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
