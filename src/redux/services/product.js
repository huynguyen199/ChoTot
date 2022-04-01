import {client} from "@common/client"

const getProducts = (page) => {
  return client.get(`products?page=${page}`).then((response) => {
    return response.data
  })
}
const addProduct = (data) => {
  const body = {
    name: data.name,
    price: data.price,
    description: data.description,
    location: data.location,
    category: data.category,
    imageUrl: data.imageUrl,
  }

  return client.post(`products`, body).then((response) => {
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
  addProduct,
}
export default productService
