import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon_close_btn'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '../indicator'
import IconTriangleArrowBottom from '@/assets/svg/icon_triangle_arrow_bottom'
import IconTriangleArrowTop from '@/assets/svg/icon_triangle_arrow_top'

const PictureBrowser = memo((props) => {
    const {pictureUrls,closeClick} = props
    const [currentIndex,setCurrentIndex] = useState(0)
    const [showList,setShowList] = useState(true)
    const [next,setNext] = useState(true)
    // 弹出使得滚动功能消失，关闭恢复滚动功能
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[])

    // 触发父元素的事件，控制browser的显示与否
    function closeClickHandle(){
        if(closeClick) closeClick()
    }

    function controlClickHandle (isNext) {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
        if(newIndex<0) newIndex = pictureUrls.length - 1
        if(newIndex>pictureUrls.length-1) newIndex = 0
        setCurrentIndex(newIndex)
        setNext(isNext)
    }

    function itemClickHandle (index){
        index > currentIndex ? setNext(true) : setNext(false)
        setCurrentIndex(index)
    }
  return (
    <BrowserWrapper next={next.toString()} showlist={showList.toString()}>
        <div className="top">
            <div className="close-btn" onClick={closeClickHandle}>
                <IconClose/>
            </div>
        </div>
        <div className="slider">
            <div className="control">
                <div className="btn left" onClick={()=>controlClickHandle(false)}>
                    <IconArrowLeft width="77" height="77"/>
                </div>
                <div className="btn right" onClick={()=>controlClickHandle(true)}>
                    <IconArrowRight width="77" height="77"/>
                </div>
            </div>
            <div className="picture">
                <SwitchTransition mode='in-out'>
                    <CSSTransition
                        key={pictureUrls[currentIndex]}
                        classNames="pic"
                        timeout={200}
                    >
                        <img src={pictureUrls[currentIndex]} alt="" />
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
        <div className="preview">
            <div className="info">
                <div className="desc">
                    <div className="count">
                        <span>{currentIndex + 1}/{pictureUrls.length}</span>
                        <span>room apartment图片</span>
                    </div>
                    <div className="toggle" onClick={()=>setShowList(!showList)}>
                        <span>{showList ? '隐藏' : '显示'}图片列表</span>
                        {
                            showList ? <IconTriangleArrowBottom/> : <IconTriangleArrowTop/>
                        }
                        
                    </div>
                </div>
                
                <div className="list">
                    <Indicator selectIndex={currentIndex}>
                        {
                            pictureUrls.map((item,index)=>{
                                return (
                                    <div className="item" key={item} onClick={()=>itemClickHandle(index)}>
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Indicator>
                    
                </div>
            </div>
        </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
    pictureUrls:PropTypes.array
}

export default PictureBrowser