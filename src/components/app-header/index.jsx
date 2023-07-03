import React, { memo,useRef,useState } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { SearchAreaWrapper } from './style'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const Header = memo(() => {
    const [isSearch,setIsSearch] = useState(false)
    const {headerConfig} = useSelector((state)=>({
        headerConfig:state.main.headerConfig
    }),shallowEqual)
    const {fixed,topAlpha} = headerConfig

    

    // 滑动隐藏search逻辑
    const {scrollY} = useScrollPosition()
    const preY = useRef()
    if(!isSearch) preY.current = scrollY
    if(isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false)

    const isAlpha = topAlpha && scrollY===0
  return (
    <ThemeProvider theme={{isAlpha}}>
        <HeaderWrapper className={classNames({fixed:fixed})}>
            <div className="content">
                <div className="top">
                    <HeaderLeft></HeaderLeft>
                    <HeaderCenter search={isAlpha || isSearch} searchBarClick={setIsSearch}></HeaderCenter>
                    <HeaderRight></HeaderRight>
                </div>
                <SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
            </div>
            {isSearch && <div className="cover" onClick={()=>setIsSearch(false)}></div>}
            
        </HeaderWrapper>
    </ThemeProvider>
  )
})

export default Header