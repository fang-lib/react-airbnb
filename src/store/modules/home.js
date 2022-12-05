import { getDiscount, getGoodPrice, getHighScore, getRecommend } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchHomeData = createAsyncThunk('home/fetchGoodPriceData', async(entroInfo, { dispatch }) => {
  getGoodPrice().then(res => {
    dispatch(changeGoodPrice(res))
  })
  getHighScore().then(res => {
    dispatch(changeHightScore(res))
  })
  getRecommend().then(res => {
    dispatch(changeRecommend(res))
  })
  getDiscount().then(res => {
    dispatch(changeDiscount(res))
  })
})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceData: {},
    hightScoreData: {},
    recommendData: {},
    discountData: {}
  },
  reducers: {
    changeGoodPrice(state, { payload }) {
      console.log(payload)
      state.goodPriceData = payload
    },
    changeHightScore(state, { payload}) {
      state.hightScoreData = payload
    },
    changeRecommend(state, {payload}) {
      state.recommendData = payload
    },
    changeDiscount(state, { payload }) {
      state.discountData = payload
    }
  }
})

export const { changeGoodPrice, changeHightScore, changeRecommend, changeDiscount } = homeSlice.actions
export default homeSlice.reducer