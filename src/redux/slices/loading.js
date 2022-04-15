import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
}

export const loadingSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    showLoading(state) {
      state.loading = true
    },
    hideLoading(state) {
      state.loading = false
    },
  },
})

// Action creators
export const {showLoading, hideLoading} = loadingSlice.actions
export default loadingSlice.reducer
