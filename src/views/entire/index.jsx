import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFliter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(changeHeaderConfigAction({fixed:true}))
    },[dispatch])
  return (
    <EntireWrapper>
        <EntireFliter/>
        <EntireRooms/>
        <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire