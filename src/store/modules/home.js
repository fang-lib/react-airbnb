import { getGoodPrice } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchGoodPriceData = createAsyncThunk('home/fetchGoodPriceData', async(entroInfo, { dispatch }) => {
  getGoodPrice().then(res => {
    dispatch(changeGoodPrice(res))
  })
})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceData: {}
  },
  reducers: {
    changeGoodPrice(state, { payload }) {
      console.log(payload)
      state.goodPriceData = payload
    }
  }
})

export const { changeGoodPrice } = homeSlice.actions
export default homeSlice.reducer