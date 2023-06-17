import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from './modules/home'
import entireReducer from "./modules/entire";

const store = configureStore({
    reducer:{
        home:HomeReducer,
        entire:entireReducer
    }
})

export default store