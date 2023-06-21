import PropTypes from 'prop-types'
import React, { memo, useState,useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    const {infoData} = props
    const tabNames = infoData.dest_address?.map(item=>item.name)

    const initialName = Object.keys(infoData.dest_list)[0]
    const [name,setName] = useState(initialName)
    
   // 传递给子组件的函数
    const itemClick = useCallback(function (index,name){
        setName(name)
    },[])
    

    return (
    <SectionV2Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTabs  tabNames={tabNames} itemClick={itemClick} />
        <SectionRooms roomList={infoData.dest_list?.[name]} itemwidth="33.333%" />
        <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV2