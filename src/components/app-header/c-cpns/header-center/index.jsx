import React, { memo,useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import SearchTitles from '@/assets/data/search_titles.json'

const HeaderCenter = memo((props) => {
    const {search,searchBarClick} = props
    const  titles  = SearchTitles.map(item => item.title)
    const [tabIndex,setTabIndex] = useState(0)
    function searchBarClickHandle (){
        if(searchBarClick) searchBarClick(true)
    }

  return (
    <CenterWrapper>
            <CSSTransition
                in={!search}
                classNames="bar"
                timeout={250}
                unmountOnExit={true}
            >
                <div className="search-bar" onClick={searchBarClickHandle}>
                    <div className="text">
                        搜索房源和体验
                    </div>
                    <div className="icon">
                        <IconSearchBar/>
                    </div>
                </div>
            </CSSTransition>
                
            <CSSTransition
                in={search}
                classNames="details"
                timeout={250}
                unmountOnExit={true}
            >
                <div className="search-details">
                    <SearchTabs titles={ titles } tabClick={setTabIndex} />
                    <div className="infos">
                        <SearchSections searchinfos={SearchTitles[tabIndex].searchInfos} />
                    </div>
                </div>
            </CSSTransition>
                
  
        
        
    </CenterWrapper>
  )
})

export default HeaderCenter