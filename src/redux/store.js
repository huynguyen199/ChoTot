import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slices/auth"
import categorySlice from "./slices/category"
import productSlice from "./slices/product"

export default configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    category: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
