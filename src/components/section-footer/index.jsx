import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
    const {name} = props
  return (
    <FooterWrapper color={name ? '#00848A':'#000'}>
        <div className="info">
            <span className="text">{name ? `显示更多${name}房源` : '显示全部'}</span>
            <IconMoreArrow/>
        </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter