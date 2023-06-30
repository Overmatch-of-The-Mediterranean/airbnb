
import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListData } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
    // 获取redux中的数据
    const { currentPage, totalCount, roomList} = useSelector((state)=>({
        currentPage: state.entire.currentPage,
        totalCount: state.entire.totalCount,
        roomList: state.entire.roomList,
    }),shallowEqual)

    // 定义组件内使用到的数据
    const pageCount = Math.ceil(totalCount / 20)
    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20
    const dispatch = useDispatch()

    // 事件处理逻辑
    function changeRoomListHandle (event,value){
        window.scrollTo(0,0)
        dispatch(fetchRoomListData(value - 1))
    }

  return (
    <PaginationWrapper>
        { !!roomList.length && (
            <div className="info">
                <Pagination count={pageCount} onChange={changeRoomListHandle}/>
                <div className="desc">
                    第{startCount}~{endCount}个房源，共超过{totalCount}个
                </div>
            </div>
        ) }
        
    </PaginationWrapper>
  )
})


export default EntirePagination