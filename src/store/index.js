import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from './modules/home'
import entireReducer from "./modules/entire";
import DetailReducer from './modules/detail'
const store = configureStore({
    reducer:{
        home:HomeReducer,
        entire:entireReducer,
        detail:DetailReducer
    }
})

export default store