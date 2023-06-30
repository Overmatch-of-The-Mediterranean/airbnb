
import React, { memo, useEffect } from 'react'
import { RoomsWrapper } from './style'
import { fetchRoomListData } from '@/store/modules/entire/createActions'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const EntireRooms = memo((props) => {
    // 获取redux中的数据
    const {roomList,isLoading} = useSelector((state)=>({
        roomList: state.entire.roomList,
        isLoading: state.entire.isLoading
    }),shallowEqual)

    const dispatch = useDispatch()
    // 发送网络请求
    useEffect(()=>{
        dispatch(fetchRoomListData())
    },[dispatch])

  return (
    <RoomsWrapper>
        <div className="title">300多处住所</div>
        <div className="list">
            {
                roomList.map((item,index)=>{
                    return (
                        <RoomItem key={item._id} item={item} itemwidth="20%"/>
                    )
                })
            }
        </div>
        { isLoading && <div className="cover"></div> }
        
    </RoomsWrapper>
  )
})


export default EntireRooms