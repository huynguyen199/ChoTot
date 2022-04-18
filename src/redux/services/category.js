import {client} from "@common/client"

const getCategories = () => {
  return client.get(`categories`).then((response) => {
    return response.data
  })
}

const getCategoriesById = (id) => {
  return client.get(`categories/${id}`).then((response) => {
    return response.data
  })
}
const categoryService = {
  getCategories,
  getCategoriesById,
}
export default categoryService
