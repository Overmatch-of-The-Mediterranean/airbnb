import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
    const navigate = useNavigate()
    function toHomeHandle (){
        navigate('/home')
        window.scrollTo(0,0)
    }

  return (
    <LeftWrapper>
        <div className="logo" onClick={toHomeHandle}>
            <IconLogo/>
        </div>
    </LeftWrapper>
  )
})

export default HeaderLeft