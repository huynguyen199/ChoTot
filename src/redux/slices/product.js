import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import productService from "../services/product"

const initialState = {
  data: [],
  pagination: {},
  item: {},
  productsByCategory: {data: [], pagination: {}},
  searchProduct: {data: [], pagination: {}},
  searchFound: {data: [], pagination: {}},
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
      return {product: {...res, category: res.category._id, author: res.author}}
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

export const getProductSearch = createAsyncThunk(
  "product/getProductsSearch",
  async (params, thunkAPI) => {
    try {
      console.log("test product")
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

export const getProductsByCategory = createAsyncThunk(
  "product/getProductsByCategory",
  async (params, thunkAPI) => {
    try {
      const res = await productService.getProductsByCategory(
        params.page,
        params.category,
      )
      return {productsByCategory: {data: res.data, pagination: res.pagination}}
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
      state.item = {}
    },
    clearProductsFound(state) {
      state.searchFound.data = []
      state.searchFound.pagination = {}
    },
    clearSearchProducts(state) {
      state.searchProduct.data = []
      state.searchProduct.pagination = {}
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
      state.productsByCategory.data.push(
        ...action.payload.productsByCategory.data,
      )
      state.productsByCategory.pagination =
        action.payload.productsByCategory.pagination
    },
    [getProductsByCategory.rejected]: (state, action) => {
      state.productsByCategory = null
    },
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
    },
    [addProduct.rejected]: (state, action) => {},
  },
})

// Action creators
export const {
  resetProducts,
  clearDetails,
  resetProductByCategory,
  clearProductsFound,
  clearSearchProducts,
} = productSlice.actions
export default productSlice.reducer
