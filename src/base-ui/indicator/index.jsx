
import React, { memo, useEffect,useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const { selectIndex = 0 } = props
    const contentRef = useRef()

    useEffect(()=>{
        // 获取当前元素
        let selectItem = contentRef.current.children[selectIndex]
        // 获取当前元素的offsetLeft和宽度
        let itemLeft = selectItem.offsetLeft
        let itemWdith = selectItem.clientWidth

        // 父容器的宽度
        let contentWidth = contentRef.current.clientWidth

        // 计算移动的记录
        let distance = itemLeft + itemWdith * 0.5 - contentWidth * 0.5

        // 处理左右边界情况
        const totalDistance = contentRef.current.scrollWidth - contentRef.current.clientWidth
        if(distance < 0) distance = 0
        if(distance > totalDistance) distance = totalDistance
        contentRef.current.style.transform = `translate(${-distance}px)`
    },[selectIndex])

  return (
    <IndicatorWrapper>
        <div className="i-content" ref={contentRef}>
            {
                props.children
            }
        </div>
    </IndicatorWrapper>
  )
})


export default Indicator