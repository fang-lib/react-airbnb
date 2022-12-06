import { getEntireList } from "@/services/modules/entire";
import { CHANGE_CURRENT_PAGE, CHANGE_ENTIRE_DATA, CHANGE_TOTAL } from "./constants";

export function changeCurrentPage(page) {
  return { type: CHANGE_CURRENT_PAGE, currentPage: page }
}

export function changeTotal(total) {
  return { type: CHANGE_TOTAL, total }
}

export function changeEntireData(entireData) {
   return { type: CHANGE_ENTIRE_DATA, entireData }
}

export function fetchEntireData() {
  return function(dispatch, getState) {
    const currentPage = getState().entire.currentPage
    const offset = currentPage * 20
    getEntireList({offset, size: 20}).then(res => {
      dispatch(changeEntireData(res))
      dispatch(changeTotal(res.totalCount))
    })
  }
}