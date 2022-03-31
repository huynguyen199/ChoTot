import {client} from "@common/client"

const getCategories = () => {
  return client.get(`categories`).then((response) => {
    return response.data
  })
}
const categoryService = {
  getCategories,
}
export default categoryService
