import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cartSlice.js";



const appStore = configureStore({
    reducer: {
        cart: createReducer,
    }
});

export default appStore;