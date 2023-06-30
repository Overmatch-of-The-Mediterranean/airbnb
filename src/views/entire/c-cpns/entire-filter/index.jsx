
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFliter = memo((props) => {

    const [selectItems,setSelectItems] = useState([])

    // 事件处理函数
    function itemClickHandle (item){
        const newItems = [...selectItems]
        if(newItems.includes(item)){
            const removeIndex = newItems.findIndex(filterItem => filterItem === item)
            newItems.splice(removeIndex,1)
        } else {
            newItems.push(item)
        }
        setSelectItems(newItems)

    }

  return (
    <FilterWrapper>
        <div className='filter'>
            {
                filterData.map((item,index)=>{
                    return (
                        <div 
                            className={classNames('item',{active:selectItems.includes(item)})}
                            key={index}
                            onClick={()=>itemClickHandle(item)}
                        >
                            {item}
                        </div>
                    )
                })
            }
        </div>
    </FilterWrapper>
  )
})


export default EntireFliter