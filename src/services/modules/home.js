import request from "../request";

export const getGoodPrice = () => request.get({url: '/home/highscore'})