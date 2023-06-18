import { getHomeGoodPriceData } from "@/services";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeGoodPriceDataAction = createAsyncThunk('fetchHome',async()=>{

    const res = await getHomeGoodPriceData()
    console.log(res);
    return res
})

const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPrice:{}
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchHomeGoodPriceDataAction.fulfilled,(state,{payload})=>{
            state.goodPrice = payload
        })
    }
})

export default homeSlice.reducer