import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(changeHeaderConfigAction({fixed:false}))
    },[dispatch])

  return (
    <DetailWrapper>
        <DetailPicture/>
    </DetailWrapper>
  )
})

export default Detail