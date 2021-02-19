import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cart from "./cart";
import products from "./products";

export default configureStore({
  reducer: {
    cart,
    products,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
