import hyRequest from "../index"
export function getHomeGoodPriceData (){
    return hyRequest.get({
        url:'/home/goodprice'
    })
}

export function getHomeHighscoreData (){
    return hyRequest.get({
        url:'/home/highscore'
    })
}

export function getHomeDiscountData (){
    return hyRequest.get({
        url:'/home/discount'
    })
}

export function getHomeHotRecommend(){
    return hyRequest.get({
        url:'/home/hotrecommenddest'
    })
}