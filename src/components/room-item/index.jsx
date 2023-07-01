import PropTypes from 'prop-types'
import React, { memo,useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
    const {item,itemwidth,itemClick} = props
    const [selectIndex,setSelectIndex] = useState(0)
    const carouselRef = useRef()
    const totalLength = item?.picture_urls?.length

    // 切换图片逻辑，并将selectIndex传给Indicator
    function clickHandle(e,isRight=true){
        e.stopPropagation()
        isRight ? carouselRef.current.next() : carouselRef.current.prev()
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        if(newIndex < 0) newIndex = totalLength - 1
        if(newIndex > totalLength - 1) newIndex = 0
        setSelectIndex(newIndex)
    }
    // 事件处理函数：触发父组件事件并传递数据
    function itemClickHandle (){
        if(itemClick) itemClick(item)
    }

    // 单张图片
    const CoverEl = (
        <div className="cover">
            <img src={item.picture_url} alt="" />
        </div>
    )

    // 图片轮播图
    const SliderEl = (
        <div className="slider" onClick={itemClickHandle}>
                <div className="control">
                    <div className="btn left" onClick={(e)=>clickHandle(e,false)}>
                        <IconArrowLeft width={30} height={30}/>
                    </div>
                    <div className="btn right" onClick={(e)=>clickHandle(e,true)}>
                        <IconArrowRight width={30} height={30}/>
                    </div>
                </div>
                <div className="indicator">
                    <Indicator selectIndex={selectIndex}>
                        {
                            item?.picture_urls?.map((item,index)=>{
                                return (
                                    <div className='item' key={index}>
                                        <span 
                                        className={classNames('dot',{
                                            active:selectIndex === index,
                                            selectIndex_1:index === selectIndex - 1 && selectIndex < totalLength - 4 && selectIndex > 2,
                                            selectIndex_2:index === selectIndex - 2 && selectIndex < totalLength - 4 && selectIndex > 2,
                                            selectIndex_3:index === selectIndex - 3 && selectIndex < totalLength - 4 && selectIndex > 2,
                                            selectIndexAdd1:index === selectIndex + 1 && selectIndex < totalLength - 4 && selectIndex > 2,
                                            selectIndexAdd2:index === selectIndex + 2 && selectIndex < totalLength - 4 && selectIndex > 2,
                                            selectIndexAdd3:index === selectIndex + 3 && selectIndex < totalLength - 4 && selectIndex > 2
                                        })}
                                        ></span>
                                    </div>
                                )
                            }) 
                        }
                    </Indicator>
                </div>
                <Carousel dots={false} ref={carouselRef}>
                    {
                        item?.picture_urls?.map((item,index)=>{
                            return (
                                <div className="cover" key={item}>
                                    <img src={item} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
    )
  return (
    <ItemWrapper itemwidth={itemwidth} verifycolor={item?.verify_info.text_color || "#39576a"}>
        <div className="inner">
            {
                item.picture_urls ? SliderEl : CoverEl
            }
            
            <div className="desc">{item.verify_info.messages.join('·')}</div>
            <div className="name">{item.name}</div>
            <div className="price">￥{item.price}/每晚</div>
            <div className="bottom">
            <Rating name="read-only" 
                value={item.star_rating ?? 4.5}
                precision={0.1} 
                readOnly 
                sx={{fontSize:'12px',color: "#00848A"}}
                />
                <div className="count">{item.reviews_count}</div>
                { item.bottom_info?.content  && <div className="extro">·{item.bottom_info?.content}</div> }
            </div>
        </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
    item:PropTypes.object,
    itemwidth:PropTypes.string
}

export default RoomItem