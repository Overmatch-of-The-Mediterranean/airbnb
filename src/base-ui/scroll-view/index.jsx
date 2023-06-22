
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    const [posIndex,setPosIndex] = useState(0)
    const [showLeft,setShowLeft] = useState(false)
    const [showRight,setShowRight] = useState(false)
    const scrollContentRef = useRef()
    const totalDistanceRef = useRef()

    useEffect(()=>{
        const scrollWidth = scrollContentRef.current.scrollWidth
        const clientWidth = scrollContentRef.current.clientWidth
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)
    },[props.children])
    
    function controlClickHandle (isRight){
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const newEle = scrollContentRef.current.children[newIndex]
        const newOffsetLeft = newEle.offsetLeft
        scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
        setPosIndex(newIndex)
        setShowRight(totalDistanceRef.current > newOffsetLeft)
        setShowLeft(newOffsetLeft > 0)
        // console.log(newEle, newOffsetLeft);
    }

  return (
    <ViewWrapper>
            { showLeft && (
                <div className='control left' onClick={()=>controlClickHandle(false)}>
                    <IconArrowLeft/>
                </div>
            )}
            { showRight && (
                <div className='control right' onClick={()=>controlClickHandle(true)}>
                    <IconArrowRight/>
                </div>
            ) }
        <div className="scroll">
            <div className="scroll-content" ref={scrollContentRef}>
                { props.children }
            </div>
        </div>
        
    </ViewWrapper>
  )
})


export default ScrollView