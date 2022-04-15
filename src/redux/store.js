import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slices/auth"
import categorySlice from "./slices/category"
import loadingSlice from "./slices/loading"
import productSlice from "./slices/product"

export default configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    category: categorySlice,
    progress: loadingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
