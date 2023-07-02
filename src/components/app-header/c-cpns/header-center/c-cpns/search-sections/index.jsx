import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionsWrapper } from './style'

const SearchSections = memo((props) => {
    const {searchinfos} = props
  return (
    <SectionsWrapper>
        {
            searchinfos.map((item,index)=>{
                return (
                    <div className="item" key={index}>
                        <div className="info">
                            <div className="title">{item.title}</div>
                            <div className="desc">{item.desc}</div>
                        </div>
                        
                        { index !== searchinfos.length - 1 && <div className="divider"></div>}
                    </div>
                )
            })
        }
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {}

export default SearchSections