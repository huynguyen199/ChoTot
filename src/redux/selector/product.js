export const selectProducts = (state) => state.product.data

export const selectPagination = (state) => state.product.pagination

export const selectProductDetails = (state) => state.product.item

export const selectProductByCategory = (state) =>
  state.product.productsByCategory.data

export const selectPaginationOfProductByCategory = (state) =>
  state.product.productsByCategory.pagination
