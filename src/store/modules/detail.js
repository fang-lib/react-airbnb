import storage from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailImgList: storage.getStorage('picture_urls') ?? []
  },
  reducers: {
    changeDetailImgLIst(state, { payload }) {
      state.detailImgList = payload
    }
  }
})

export const { changeDetailImgLIst } = detailSlice.actions
export default detailSlice.reducer