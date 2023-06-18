import hyRequest from "../index"
export function getHomeGoodPriceData (){
    return hyRequest.get({
        url:'/home/goodprice'
    })
}