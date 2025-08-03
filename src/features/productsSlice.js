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
    rangeMax: 0,
    filterByCategory: "all",
    filterByPrice: {}
  },
  reducers: {
    chooseCategory(state, { payload }) {
      state.filterByCategory = payload
    },
    changePriceRange(state, { payload: { min, max } }) {
      state.filterByPrice = { min, max }
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
        state.filterByPrice = { min: 0, max: Math.max(...state.products.map(product => product.price)) }


      })
      .addCase(getAsyncProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  },
  selectors: {
    getAllProducts: (state) => {
      const filteredProducts =
        state.filterByCategory === "all"
          ? state.products
          : state.products.filter(elm => elm.category.includes(state.filterByCategory));
      const rangeMax = Math.max(...filteredProducts.map(product => product.price));


      const filteredByPrice = filteredProducts.filter(
        elm => elm?.price >= state.filterByPrice.min && elm.price <= state.filterByPrice.max
      );

      // console.log(state.filterByPrice.max);

      // const maxPrice = Math.max(...filteredByPrice.map(product => product.price))
      const maxPrice = filteredByPrice.length
        ? Math.max(...filteredByPrice.map(product => product.price))
        : 0;

      return {
        ...state,
        filterByPrice: { min: 0, max: maxPrice },
        products: filteredByPrice,
        rangeMax
      };
    }

  },

})


export default productsSlice.reducer
export const { chooseCategory, changePriceRange } = productsSlice.actions
export const { getAllProducts } = productsSlice.selectors