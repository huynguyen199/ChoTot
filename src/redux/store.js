import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slices/auth"
import productSlice from "./slices/product"

export default configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
