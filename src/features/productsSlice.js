import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAsyncProducts = createAsyncThunk(
  "products/getAsyncProducts",
  async () => {
    const res = await axios("http://localhost:3000/products")
    return res.data
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  reducers: {
    showType(state, action) {
      return action.type;
    }
  },
  selectors: {
    getAllProducts: (state) => state
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAsyncProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(getAsyncProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  }

})


export default productsSlice.reducer
export const { showType } = productsSlice.actions
export const { getAllProducts } = productsSlice.selectors