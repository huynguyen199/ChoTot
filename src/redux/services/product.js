import {client} from "@common/client"

const getProducts = (page) => {
  return client.get(`products?page=${page}`).then((response) => {
    return response.data
  })
}

const getProductDetails = (id) => {
  return client.get(`products/${id}`).then((response) => {
    return response.data
  })
}

const productService = {
  getProducts,
  getProductDetails,
}
export default productService
