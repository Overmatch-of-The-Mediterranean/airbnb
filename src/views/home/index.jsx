import React, { memo, useEffect } from 'react'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeGoodPriceDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {

    const { goodPrice } = useSelector(state=>({
        goodPrice:state.home.goodPrice
    }),shallowEqual)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchHomeGoodPriceDataAction())
    },[dispatch])


  return (
    <HomeWrapper>
        <HomeBanner/>
        <div className="content">
            <div className="good-price">
                <SectionHeader title={goodPrice.title} subtitle={goodPrice.subtitle}/>
                <SectionRooms roomList={goodPrice.list}/>
            </div>
            
        </div>
    </HomeWrapper>
  )
})

export default Home