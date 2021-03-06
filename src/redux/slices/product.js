import productService from "../../services/product"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
  data: [],
  pagination: {},
  item: {},
  productsByCategory: {data: [], pagination: {}},
  searchProduct: {data: [], pagination: {}},
  searchFound: {data: [], pagination: {}},
  myPostedProducts: {data: [], pagination: {}},
  loading: false,
  relatedProduct: {data: []},
}

const handledError = (error) => {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  )
}

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data, thunkAPI) => {
    try {
      const res = await productService.addProduct(data)
      return {
        product: {...res, category: res.category._id, author: {...res.author}},
      }
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (page = 1, thunkAPI) => {
    try {
      const res = await productService.getProducts(page)
      return {data: res.data, pagination: res.pagination}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getRelatedProducts = createAsyncThunk(
  "product/getRelatedProducts",
  async (id, thunkAPI) => {
    try {
      const res = await productService.getRelatedProducts(id)
      return {data: res.data}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getProductSearch = createAsyncThunk(
  "product/getProductsSearch",
  async (params, thunkAPI) => {
    try {
      const res = await productService.getProductsSearch(
        params.page,
        params.name,
      )
      return {data: res.data, pagination: res.pagination}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getProductFound = createAsyncThunk(
  "product/getProductsFound",
  async (params, thunkAPI) => {
    try {
      const res = await productService.getProductsSearch(
        params.page,
        params.name,
      )
      return {data: res.data, pagination: res.pagination}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)
export const getMyPostedProducts = createAsyncThunk(
  "product/getMyPostedProducts",
  async (page = 1, thunkAPI) => {
    try {
      const res = await productService.getMyPostedProducts(page)

      return {data: res.data, pagination: res.pagination}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getProductsByCategory = createAsyncThunk(
  "product/getProductsByCategory",
  async (params, thunkAPI) => {
    try {
      const res = await productService.getProductsByCategory(
        params.page,
        params.category,
      )
      return {data: res.data, pagination: res.pagination}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (params, thunkAPI) => {
    try {
      const res = await productService.updateProduct(params.id, params.data)
      return {
        product: {...res, category: res.category._id, author: {...res.author}},
      }
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id, thunkAPI) => {
    try {
      const data = await productService.getProductDetails(id)
      return {item: data}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const deleteProductById = createAsyncThunk(
  "product/deleteProductById",
  async (id, thunkAPI) => {
    try {
      const data = await productService.deleteProductById(id)
      return {id: id, success: data.success}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProducts(state) {
      state.data = []
      state.pagination = {page: 0}
    },
    resetProductByCategory(state) {
      state.productsByCategory = {data: [], pagination: {}}
    },
    clearDetails(state) {
      state.item = null
    },
    clearProductsFound(state) {
      state.searchFound.data = []
      state.searchFound.pagination = {page: 0}
    },
    clearSearchProducts(state) {
      state.searchProduct.data = []
      state.searchProduct.pagination = {page: 0}
    },
    clearSearchFound(state) {
      state.searchProduct.data = []
      state.searchProduct.pagination = {page: 0}
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.data.push(...action.payload.data)
      state.pagination = action.payload.pagination
    },
    [getProducts.rejected]: (state, action) => {
      state.data = null
    },
    [getProductsByCategory.fulfilled]: (state, action) => {
      state.productsByCategory.data.push(...action.payload.data)
      state.productsByCategory.pagination = action.payload.pagination
    },
    [getProductsByCategory.rejected]: (state, action) => {
      state.productsByCategory = null
    },
    [getMyPostedProducts.fulfilled]: (state, action) => {
      const page = state.myPostedProducts.pagination.page
      if (page >= 1) {
        state.myPostedProducts.data.push(...action.payload.data)
        state.myPostedProducts.pagination = action.payload.pagination
      } else {
        state.myPostedProducts.data = action.payload.data
        state.myPostedProducts.pagination = action.payload.pagination
      }
    },
    [getMyPostedProducts.rejected]: (state, action) => {
      state.myPostedProducts = {
        data: [],
        pagination: {},
      }
    },
    [getMyPostedProducts.rejected]: (state, action) => {},
    [getProductDetails.fulfilled]: (state, action) => {
      state.item = action.payload.item
    },
    [getProductDetails.rejected]: (state, action) => {
      state.item = null
    },
    [getProductSearch.fulfilled]: (state, action) => {
      state.searchProduct.data = action.payload.data
      state.searchProduct.pagination = action.payload.pagination
    },
    [getProductSearch.rejected]: (state, action) => {
      state.searchProduct.data = []
      state.searchProduct.pagination = {}
    },
    [getRelatedProducts.fulfilled]: (state, action) => {
      state.relatedProduct.data = action.payload.data
    },
    [getRelatedProducts.rejected]: (state, action) => {
      state.relatedProduct.data = []
    },
    [getProductFound.fulfilled]: (state, action) => {
      const page = state.searchFound.pagination.page
      if (page === 1) {
        state.searchFound.data = action.payload.data
        state.searchFound.pagination = action.payload.pagination
      } else {
        state.searchFound.data.push(...action.payload.data)
        state.searchFound.pagination = action.payload.pagination
      }
    },
    [getProductFound.rejected]: (state, action) => {
      state.searchFound.data = []
      state.searchFound.pagination = {}
    },
    [addProduct.fulfilled]: (state, action) => {
      state.data.unshift(action.payload.product)

      state.myPostedProducts.data.unshift(action.payload.product)
    },
    [addProduct.rejected]: (state, action) => {},
    [deleteProductById.fulfilled]: (state, action) => {
      state.myPostedProducts.data = state.myPostedProducts.data.filter(
        (item) => item._id !== action.payload.id,
      )
    },
    [deleteProductById.rejected]: (state, action) => {},
    [updateProduct.fulfilled]: (state, action) => {
      const id = action.payload.product._id
      const index = state.myPostedProducts.data.findIndex(
        (product) => product._id === id,
      )
      state.data[index] = action.payload.product
      state.myPostedProducts.data[index] = action.payload.product
    },
    [updateProduct.rejected]: (state, action) => {},
  },
})

// Action creators
export const {
  resetProducts,
  clearDetails,
  resetProductByCategory,
  clearProductsFound,
  clearSearchProducts,
  showLoading,
  hideLoading,
  clearSearchFound,
} = productSlice.actions
export default productSlice.reducer
