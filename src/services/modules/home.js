import request from "../request";

export const getGoodPrice = () => request.get({url: '/home/goodPrice'})
export const getHighScore = () => request.get({url: '/home/highscore'})
export const getRecommend = () => request.get({url: '/home/hotrecommenddest'})
export const getDiscount = () => request.get({url: '/home/discount'})