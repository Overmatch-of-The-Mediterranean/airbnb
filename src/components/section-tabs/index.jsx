import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import {TabsWrapper} from './style'
import classNames from 'classnames'

const SectionTabs = memo((props) => {
    const {tabNames = [], itemClick} = props
    const [currentIndex, setCurrentIndex] = useState(0)

    function itemClickHandle (index,name){
        setCurrentIndex(index)
        itemClick(index,name)
    }

    return (
    <TabsWrapper>
        {
            tabNames.map((item,index) => {
                return (
                    <div
                        onClick={()=>itemClickHandle(index,item)}
                        key={index}
                        className={classNames(['item',{active: index === currentIndex}])}
                    >
                        {item}
                    </div>
                )
            })
        }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
    tabNames:PropTypes.array
}

export default SectionTabs