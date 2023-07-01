
import React, { memo, useCallback, useEffect } from 'react'
import { RoomsWrapper } from './style'
import { fetchRoomListData } from '@/store/modules/entire/createActions'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
    // 获取redux中的数据
    const {roomList,isLoading} = useSelector((state)=>({
        roomList: state.entire.roomList,
        isLoading: state.entire.isLoading
    }),shallowEqual)
    
    const navigate = useNavigate()
   

    const dispatch = useDispatch()
    // 发送网络请求
    useEffect(()=>{
        dispatch(fetchRoomListData())
    },[dispatch])

    // 传递给子组件的事件，用来将详情页中的信息保存在redux中
    const itemClickHandle = useCallback((item)=>{
        dispatch(changeDetailInfoAction(item))
        navigate('/detail')
    },[dispatch,navigate])

  return (
    <RoomsWrapper>
        <div className="title">300多处住所</div>
        <div className="list">
            {
                roomList.map((item,index)=>{
                    return (
                        <RoomItem 
                            key={item._id} 
                            item={item} 
                            itemwidth="20%"
                            itemClick={itemClickHandle}
                        />
                    )
                })
            }
        </div>
        { isLoading && <div className="cover"></div> }
        
    </RoomsWrapper>
  )
})


export default EntireRooms