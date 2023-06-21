import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating';
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
    const {item,itemwidth} = props

  return (
    <ItemWrapper itemwidth={itemwidth} verifycolor={item?.verify_info.text_color || "#39576a"}>
        <div className="inner">
            <div className="cover">
                <img src={item.picture_url} alt="" />
            </div>
            <div className="desc">{item.verify_info.messages.join('·')}</div>
            <div className="name">{item.name}</div>
            <div className="price">￥{item.price}/每晚</div>
            <div className="bottom">
            <Rating name="read-only" 
                value={item.star_rating ?? 4.5}
                precision={0.1} 
                readOnly 
                sx={{fontSize:'12px',color: "#00848A"}}
                />
                <div className="count">{item.reviews_count}</div>
                { item.bottom_info?.content  && <div className="extro">·{item.bottom_info?.content}</div> }
            </div>
        </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
    item:PropTypes.object
}

export default RoomItem