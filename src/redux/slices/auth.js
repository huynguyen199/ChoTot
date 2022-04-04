import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// import AsyncStorage from "@react-native-async-storage/async-storage"
import authService from "../services/auth"

// const user = JSON.parse(AsyncStorage.getItem("user"))
const initialState = {user: null}

export const login = createAsyncThunk(
  "auth/login",
  async ({email, password}, thunkAPI) => {
    try {
      const data = await authService.login(email, password)

      return {user: data}
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

export const register = createAsyncThunk(
  "auth/register",
  async ({email, password}, thunkAPI) => {
    try {
      const data = await authService.register(email, password)

      return {user: data}
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user
    },
    [login.rejected]: (state, action) => {
      state.user = null
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user
    },
    [register.rejected]: (state, action) => {
      state.user = null
    },
  },
})

// Action creators
// export const {increment, decrement, incrementByAmount} = authSlice.actions
export default authSlice.reducer
