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
    error: null,
    filter: "all"
  },
  reducers: {
    chooseCategory(state, { payload }) {
      state.filter = payload
    }
  },
  selectors: {
    getAllProducts: (state) => {
      const filteredProducts =
        state.filter === "all"
          ? state.products
          : state.products.filter(elm => elm.category.includes(state.filter));

      return {
        ...state,
        products: filteredProducts,
      };
    }

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
export const { chooseCategory } = productsSlice.actions
export const { getAllProducts } = productsSlice.selectors