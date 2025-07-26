import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [{name : "Gago"}],
    loading: false,
    error: null
  },
  reducers: {},
  selectors: {
    getAllProducts: (state) => state.data
  }

})


export default productsSlice.reducer
export const {getAllProducts} = productsSlice.selectors