import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../Products/Product";

const storedProducts = JSON.parse(localStorage.getItem("products"));

const initialState = storedProducts || Products;

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state));
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const updatedState = state.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(updatedState));
      return updatedState;
    },
    updateProduct: (state, action) => {
      const { id, title, description, price, img } = action.payload;
      const requiredProduct = state.find((product) => product.id === id);
      if (requiredProduct) {
        requiredProduct.title = title;
        requiredProduct.description = description;
        requiredProduct.price = price;
        requiredProduct.img = img;
        localStorage.setItem("products", JSON.stringify(state));
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
