import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongForItem = memo((props) => {
    const {itemdata} = props

  return (
    <ItemWrapper>
        <div className="inner">
            <div className="item-info">
                <img className='cover' src={itemdata.picture_url} alt="" />
                <div className="bg-cover"></div>
                <div className="info">
                    <div className="city">{itemdata.city}</div>
                    <div className="price">均价 {itemdata.price}</div>
                </div>
            </div>
        </div>
    </ItemWrapper>
  )
})

LongForItem.propTypes = {
    itemdata:PropTypes.object
}

export default LongForItem