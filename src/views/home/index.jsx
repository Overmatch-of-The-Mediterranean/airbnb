import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeGoodPriceDataAction } from '@/store/modules/home'

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
            <div className="title">{goodPrice.title}</div>
            <ul>
                {
                   goodPrice.list?.map(item=>{
                     return (
                        <li key={item.id}>{item.name}</li>
                    )
                   })
                }
            </ul>
        </div>
    </HomeWrapper>
  )
})

export default Home