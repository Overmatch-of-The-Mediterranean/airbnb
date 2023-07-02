
import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo((props) => {
    const [showBtn,setShowBtn] = useState(false)

    const {detailInfo} = useSelector((state)=>({
        detailInfo: state.detail.detailInfo
    }),shallowEqual)

    // console.log(detailInfo.picture_urls.slice(1,5));
  return (
    <PicturesWrapper>
        <div className="pictures">
            <div className="left">
                <div className="item">
                    <img src={detailInfo.picture_urls[0]} alt="" />
                    <div className="cover"></div>
                </div>
            </div>
            <div className="right">
                {
                    detailInfo.picture_urls.slice(1,5).map((item,index)=>{
                        return (
                            <div className="item" key={item}>
                                <img src={item} alt="" />
                                <div className="cover"></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="show-btn" onClick={()=>setShowBtn(true)}>显示按钮</div>
        { showBtn && (
            <PictureBrowser 
                pictureUrls={detailInfo.picture_urls}
                closeClick={(e)=>setShowBtn(false)}
            />
        ) }
    </PicturesWrapper>
  )
})


export default DetailPicture