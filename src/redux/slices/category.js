import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import categoryService from "../services/category"

const handledError = (error) => {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  )
}

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (thunkAPI) => {
    try {
      const data = await categoryService.getCategories()
      return {data: data}
    } catch (error) {
      const message = handledError(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)
// const user = JSON.parse(AsyncStorage.getItem("user"))
const initialState = {data: []}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.data = action.payload.data
    },
    [getCategories.rejected]: (state, action) => {
      state.data = []
    },
  },
})

// Action creators
// export const {increment, decrement, incrementByAmount} = authSlice.actions
export default categorySlice.reducer
