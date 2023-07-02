import React, { memo,useState } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { SearchAreaWrapper } from './style'

const Header = memo(() => {
    const [isSearch,setIsSearch] = useState(false)
    const {headerConfig} = useSelector((state)=>({
        headerConfig:state.main.headerConfig
    }),shallowEqual)
    const {fixed} = headerConfig
  return (
    <HeaderWrapper className={classNames({fixed:fixed})}>
        <div className="content">
            <div className="top">
                <HeaderLeft></HeaderLeft>
                <HeaderCenter search={isSearch} searchBarClick={setIsSearch}></HeaderCenter>
                <HeaderRight></HeaderRight>
            </div>
            <SearchAreaWrapper isSearch={isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && <div className="cover" onClick={()=>setIsSearch(false)}></div>}
        
    </HeaderWrapper>
  )
})

export default Header