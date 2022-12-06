import request from "../request";

export const getEntireList = (params) => request.get({url: '/entire/list', params})