import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'

const Demo = memo((props) => {
    const items = ['abc','cba','nba','aaa','bbb','ccc','eee','fff']
    const [selectIndex,setSelectIndex] = useState(0)

    function clickHandle(isNext){
        let newIndex = isNext ? selectIndex + 1 : selectIndex - 1 
        if (newIndex > items.length - 1) newIndex = 0
        if (newIndex < 0) newIndex = items.length - 1
        setSelectIndex(newIndex)
    }

  return (
    <DemoWrapper>
        <div className="control">
            <button onClick={()=>clickHandle(false)}>上一个</button>
            <button onClick={()=>clickHandle(true)}>下一个</button>
        </div>
        <Indicator selectIndex={selectIndex}>
            {
                items.map(item=>{
                    return (
                        <button key={item}>{item}</button>
                    )
                })
            }
        </Indicator>
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo