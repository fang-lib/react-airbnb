import { CHANGE_CURRENT_PAGE } from "./constants";

export function changeCurrentPage(page) {
  return { type: CHANGE_CURRENT_PAGE, currentPage: page }
}