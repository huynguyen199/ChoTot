import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import productService from "../services/product"

const initialState = {data: [], pagination: {}, item: {}}

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data, thunkAPI) => {
    try {
      const res = await productService.addProduct(data)
      return {product: {...res, category: res.category._id, author: res.author}}
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
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
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
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
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
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
    clearDetails(state) {
      state.item = {}
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
    [getProductDetails.fulfilled]: (state, action) => {
      state.item = action.payload.item
    },
    [getProductDetails.rejected]: (state, action) => {
      state.item = null
    },
    [addProduct.fulfilled]: (state, action) => {
      state.data.unshift(action.payload.product)
    },
    [addProduct.rejected]: (state, action) => {},
  },
})

// Action creators
export const {resetProducts, clearDetails} = productSlice.actions
export default productSlice.reducer
