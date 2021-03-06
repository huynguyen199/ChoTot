import {client} from "@common/client"

const getProducts = (page) => {
  return client.get(`products?page=${page}`).then((response) => {
    return response.data
  })
}

const getRelatedProducts = (id) => {
  return client.get(`products?${id}/related`).then((response) => {
    return response.data
  })
}

const getProductsSearch = (page, name) => {
  return client
    .get(`products?page=${page}&name=${name}`)
    .then((response) => response.data)
}

const getProductsByCategory = (page, category) => {
  return client
    .get(`products?page=${page}&category=${category}`)
    .then((response) => {
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

const getMyPostedProducts = (page) => {
  return client.get(`me/products?page=${page}`).then((response) => {
    return response.data
  })
}

const getProductDetails = (id) => {
  return client.get(`products/${id}`).then((response) => {
    return response.data
  })
}

const updateProduct = (id, data) => {
  return client.patch(`products/${id}`, data).then((response) => {
    return response.data
  })
}

const deleteProductById = (id) => {
  return client.delete(`products/${id}`).then((response) => {
    return response.data
  })
}

const productService = {
  getProducts,
  getProductDetails,
  getProductsByCategory,
  getMyPostedProducts,
  addProduct,
  updateProduct,
  deleteProductById,
  getProductsSearch,
  getRelatedProducts,
}
export default productService
