import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// import AsyncStorage from "@react-native-async-storage/async-storage"
import productService from "../services/product"

// const user = JSON.parse(AsyncStorage.getItem("user"))
const initialState = {data: [], pagination: {}}

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

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.data = action.payload.data
      state.pagination = action.payload.pagination
    },
    [getProducts.rejected]: (state, action) => {
      state.data = null
    },
  },
})

// Action creators
// export const {increment, decrement, incrementByAmount} = authSlice.actions
export default productSlice.reducer
