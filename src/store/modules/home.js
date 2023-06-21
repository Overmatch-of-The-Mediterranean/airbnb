
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData,  getHomeHighscoreData,getHomeDiscountData, getHomeHotRecommend } from "@/services";

export const fetchHomeGoodPriceDataAction = createAsyncThunk('fetchHome',(payload,{dispatch})=>{

    getHomeGoodPriceData().then(res=>{
        dispatch(changeHomeGoodPriceAction(res))
    })

    getHomeHighscoreData().then(res=>{
        // console.log(res);
        dispatch(changeHomeHighScoreAction(res))
    })

    getHomeDiscountData().then(res=>{
        dispatch(changeHomeDiscountAction(res))
    })

    getHomeHotRecommend().then(res=>{
        dispatch(changeHomeHotRecommendAction(res))
    })
})

const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPrice:{},
        highScore:{},
        discount:{},
        hotrecommend:{}
    },
    reducers:{
        changeHomeGoodPriceAction(state,{payload}){
            state.goodPrice = payload
        },
        changeHomeHighScoreAction(state,{payload}){
            state.highScore = payload
        },
        changeHomeDiscountAction(state,{payload}){
            state.discount = payload
        },
        changeHomeHotRecommendAction(state, {payload}){
            state.hotrecommend = payload
        }
    },
    // extraReducers:(builder)=>{
    //     builder
    //     .addCase(fetchHomeGoodPriceDataAction.fulfilled,(state,{payload})=>{
    //         state.goodPrice = payload
    //     })
    // }
})

export const {
    changeHomeGoodPriceAction, 
    changeHomeHighScoreAction,
    changeHomeDiscountAction,
    changeHomeHotRecommendAction
    } = homeSlice.actions

export default homeSlice.reducer