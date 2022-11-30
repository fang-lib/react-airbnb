import { CHANGE_CURRENT_PAGE } from "./constants";

const initalState = {
  currentPage: 0
}


function reducer(state = initalState, actions) {
  switch (actions.type) {
    case CHANGE_CURRENT_PAGE: 
      return { ...state, currentPage: actions.currentPage }
    default :
      return state
  }
}

export default reducer