import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const SearchTabs = memo((props) => {
    const {titles, tabClick} = props
    const [currentIndex,setCurrentIndex] = useState(0)
    function itemClickHandle(index) {
        if(tabClick) tabClick(index)
        setCurrentIndex(index)
    } 

  return (
    <TabsWrapper>
        {
            titles.map((item,index)=>{
                return (
                    <div 
                        className={classNames('item',{active:currentIndex === index})} 
                        key={index} 
                        onClick={()=>itemClickHandle(index)}
                    >
                        <span className='text'>{item}</span>
                        <span className='bottom'></span>
                    </div>
                )
            })
        }
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {}

export default SearchTabs