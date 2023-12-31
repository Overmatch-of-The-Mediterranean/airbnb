import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import LongForItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
    const {infoData} = props
    // console.log('infoData',infoData);

  return (
    <LongForWrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        
        <div className="longfor-list">
            <ScrollView>
                {
                    infoData.list.map((item,index)=>{
                        return <LongForItem key={index} itemdata={item}/>
                    })
                }
            </ScrollView>
        </div>
        
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
    infoData:PropTypes.object
}

export default HomeLongFor