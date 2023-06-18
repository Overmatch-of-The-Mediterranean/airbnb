import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
    // 状态
    const [showPanel,setShowPanel] = useState(false)

    // 副作用代码
    useEffect(()=>{
        function windowListener(){
            setShowPanel(false)
        }
        window.addEventListener('click',windowListener,true)

        return ()=>{
            window.removeEventListener('click',windowListener,true)
        }

    },[])

// 事件处理
    function panelClickHandle(){
        setShowPanel(true)
    }
  return (
    <RightWrapper>
        <div className="btns">
            <span className="btn">登录</span>
            <span className="btn">注册</span>
            <span className="btn">
                <IconGlobal/>
            </span>
        </div>
        <div className="profile" onClick={panelClickHandle}>
            <IconMenu/>
            <IconAvatar/>
            {showPanel && (
                <div className="panel">
                    <div className="top">
                        <div className='item'>登录</div>
                        <div className='item'>注册</div>
                    </div>
                    <div className="bottom">
                        <div className='item'>出租房源</div>
                        <div className='item'>开展体验</div>
                        <div className='item'>帮助</div>
                    </div>
            </div>
            )}
            
        </div>
    </RightWrapper>
  )
})

export default HeaderRight