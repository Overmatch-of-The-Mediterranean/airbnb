import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './modules/main'
import HomeReducer from './modules/home'
import entireReducer from "./modules/entire";
import DetailReducer from './modules/detail'
const store = configureStore({
    reducer:{
        main:mainReducer,
        home:HomeReducer,
        entire:entireReducer,
        detail:DetailReducer
    }
})

export default store