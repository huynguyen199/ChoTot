import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// import AsyncStorage from "@react-native-async-storage/async-storage"
import authService from "../services/auth"

// const user = JSON.parse(AsyncStorage.getItem("user"))
const initialState = {isLoggedIn: false, user: null, error: null}

export const login = createAsyncThunk(
  "auth/login",
  async ({email, password}, thunkAPI) => {
    try {
      const data = await authService.login(email, password)
      console.log("DEBUG: - file: auth.js - line 13 - data", data)

      return {user: data, isLoggedIn: true, error: null}
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

      return {user: data, isLoggedIn: true, error: null}
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
      state.isLoggedIn = true
      state.user = action.payload.user
      state.error = null
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false
      state.error = action.error.message
      state.user = null
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false
    },
  },
})

// Action creators
// export const {increment, decrement, incrementByAmount} = authSlice.actions
export default authSlice.reducer
