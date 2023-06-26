import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../Products/Product";

const productSlice = createSlice({
    name: "products",
    initialState : Products,
    reducers: {
        addProduct: (state, action) =>{
            console.log(state);
            state.push(action.payload);
        },
        deleteProduct: (state, action) =>{
            const {id} = action.payload;
            return state.filter(product => product.id != id);
        },
        updateProduct: (state, action) =>{
            const {id, title, description, price, img} = action.payload;
            const requiredProduct = state.find(product => product.id == id);
            if(requiredProduct){
                requiredProduct.title = title;
                requiredProduct.description = description;
                requiredProduct.price = price;
                requiredProduct.img = img;
            }
        }
    }
})
export const {addProduct, deleteProduct, updateProduct} = productSlice.actions; 
export default productSlice.reducer;