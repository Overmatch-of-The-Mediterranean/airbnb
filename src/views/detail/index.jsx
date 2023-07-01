import React, { memo } from 'react'
import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-pictures'

const Detail = memo(() => {
  return (
    <DetailWrapper>
        <DetailPicture/>
    </DetailWrapper>
  )
})

export default Detail