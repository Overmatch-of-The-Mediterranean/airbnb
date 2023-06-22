
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { 
    getHomeGoodPriceData,  
    getHomeHighscoreData,
    getHomeDiscountData, 
    getHomeHotRecommend, 
    getHomeLongForData,
    getHomePlusData
} from "@/services";

export const fetchHomeGoodPriceDataAction = createAsyncThunk('fetchHome',(payload,{dispatch})=>{

    getHomeGoodPriceData().then(res=>{
        dispatch(changeHomeGoodPriceAction(res))
    })

    getHomeHighscoreData().then(res=>{
        dispatch(changeHomeHighScoreAction(res))
    })

    getHomeDiscountData().then(res=>{
        dispatch(changeHomeDiscountAction(res))
    })

    getHomeHotRecommend().then(res=>{
        dispatch(changeHomeHotRecommendAction(res))
    })

    getHomeLongForData().then(res=>{
        dispatch(changeHomeLongForAction(res))
    })

    getHomePlusData().then(res=>{
        dispatch(changeHomePlusAction(res))
    })
})

const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPrice:{},
        highScore:{},
        discount:{},
        hotrecommend:{},
        longfor:{},
        plus:{}
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
        },
        changeHomeLongForAction(state,{payload}){
            state.longfor = payload
        },
        changeHomePlusAction (state,{payload}){
            state.plus = payload
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
    changeHomeHotRecommendAction,
    changeHomeLongForAction,
    changeHomePlusAction
    } = homeSlice.actions

export default homeSlice.reducer