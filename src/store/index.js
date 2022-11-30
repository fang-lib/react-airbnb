import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./modules/detail"
import entireReducer from './modules/entire/reducer'

const store = configureStore({
  reducer: {
    detail: detailSlice,
    entire: entireReducer
  }
})

export default store