import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// import AsyncStorage from "@react-native-async-storage/async-storage"
import authService from "../services/auth"

// const user = JSON.parse(AsyncStorage.getItem("user"))
const initialState = {user: null}

const errorHandler = (error) => {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  )
}

export const login = createAsyncThunk(
  "auth/login",
  async ({email, password}, thunkAPI) => {
    try {
      const data = await authService.login(email, password)

      return {user: data.user}
    } catch (error) {
      const message = errorHandler(error)
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
      const message = errorHandler(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getProfileInfo = createAsyncThunk(
  "auth/getProfileInfo",
  async (thunkAPI) => {
    try {
      const data = await authService.getProfile()

      return {user: data}
    } catch (error) {
      const message = errorHandler(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const updateProfileInfo = createAsyncThunk(
  "auth/updateProfileInfo",
  async (formData, thunkAPI) => {
    try {
      const data = await authService.updateProfile(formData)

      return {user: data}
    } catch (error) {
      const message = errorHandler(error)
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (thunkAPI) => {
    try {
      return authService.logout()
    } catch (error) {
      const message = errorHandler(error)
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
    [getProfileInfo.fulfilled]: (state, action) => {
      state.user = action.payload.user
    },
    [getProfileInfo.rejected]: (state, action) => {
      state.user = null
    },
    [updateProfileInfo.fulfilled]: (state, action) => {
      state.user = action.payload.user
    },
    [updateProfileInfo.rejected]: (state, action) => {
      state.user = null
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.user = null
    },
    [logoutUser.rejected]: (state, action) => {
      state.user = null
    },
  },
})

// Action creators
// export const {logoutUser} = authSlice.actions
export default authSlice.reducer
