import React, { memo, useEffect} from 'react'

import { isEmptyO } from '@/utils'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeGoodPriceDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'

const Home = memo(() => {

    
    // 获取redux中的数据
    const { goodPrice,highScore,discount, hotRecommend, longfor, plus } = useSelector(state=>({
        goodPrice:state.home.goodPrice,
        highScore:state.home.highScore,
        discount:state.home.discount,
        hotRecommend:state.home.hotrecommend,
        longfor:state.home.longfor,
        plus:state.home.plus
    }),shallowEqual)

    const dispatch = useDispatch()


    // 派发异步的事件：发送网络请求
    useEffect(()=>{
        dispatch(fetchHomeGoodPriceDataAction())
    },[dispatch])


  return (
    <HomeWrapper>
        <HomeBanner/>
        <div className="content">
            

            { isEmptyO(hotRecommend) && <HomeSectionV2 infoData={hotRecommend} /> }
            { isEmptyO(discount) && <HomeSectionV2 infoData={discount} /> } 

            { isEmptyO(longfor) && <HomeLongFor infoData={longfor}/> }

            { isEmptyO(goodPrice) && <HomeSectionV1 infoData={goodPrice} itemwidth="25%"/> } 
            { isEmptyO(highScore) && <HomeSectionV1 infoData={highScore} itemwidth="25%"/> } 
            { isEmptyO(plus) && <HomeSectionV3 infoData={plus}/> }
        </div>
    </HomeWrapper>
  )
})

export default Home