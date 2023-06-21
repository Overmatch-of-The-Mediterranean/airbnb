import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
    const {roomList = [],itemwidth} = props

  return (
        <RoomWrapper>
                {
                   roomList.slice(0,8).map(item=>{
                     return (
                        <RoomItem item={item} key={item.id} itemwidth={itemwidth}/>
                    )
                   })
                }
        </RoomWrapper>
  )
})

SectionRooms.propTypes = {
    roomList:PropTypes.array
}

export default SectionRooms