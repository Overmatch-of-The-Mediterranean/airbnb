import * as actionTypes from './constant'
import { getEntireRoomList } from '@/services/modules/entire'

export const changeCurrentPageAction = (currentPage)=>({
    type:actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList)=>({
    type:actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount)=>({
    type:actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoadingAction = (isLoading)=>({
    type:actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListData = (page = 0)=>{
    return async dispatch => {
        // 点击分页器，改变currentPage，并请求数据
        dispatch(changeCurrentPageAction(page))

        // 请求数据
        dispatch(changeIsLoadingAction(true))
        const {list,totalCount} = await getEntireRoomList(page * 20)
        dispatch(changeIsLoadingAction(false))

        // 将数据存储到redux中
        dispatch(changeRoomListAction(list))
        dispatch(changeTotalCountAction(totalCount))
    }
}