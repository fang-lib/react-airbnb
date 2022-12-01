import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./modules/detail"
import homeSlice from './modules/home'
import entireReducer from './modules/entire/reducer'

const store = configureStore({
  reducer: {
    detail: detailSlice,
    entire: entireReducer,
    home: homeSlice
  }
})

export default store