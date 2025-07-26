import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productsSlice"
console.log(productsSlice);

export default configureStore({
  reducer: {
    products: productsSlice
  },

})