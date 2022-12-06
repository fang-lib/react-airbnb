import { CHANGE_CURRENT_PAGE, CHANGE_TOTAL, CHANGE_ENTIRE_DATA } from "./constants";

const initalState = {
  currentPage: 0,
  total: 0,
  entireData: {}
}


function reducer(state = initalState, actions) {
  switch (actions.type) {
    case CHANGE_CURRENT_PAGE: 
      return { ...state, currentPage: actions.currentPage }
    case CHANGE_TOTAL:
      return { ...state, total: actions.total }
    case CHANGE_ENTIRE_DATA: 
      return { ...state, entireData: actions.entireData }
    default :
      return state
  }
}

export default reducer