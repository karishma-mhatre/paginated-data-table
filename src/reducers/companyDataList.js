import { combineReducers } from 'redux';
import { REQUEST_COMPANY_DATA_LIST, RECEIVE_COMPANY_DATA_LIST, SET_CURRENT_PAGE_NUMBER } from '../actions';

// STATE STRUCTURE
// var state = {
//   companyDataList: [],
//   currentPageNumber: 1,
//   pageSize: 10
// }

let initialState = {
  isLoadingList: false,
  companyDataList: [],
  totalCompanies: 0,
  currentPageNumber: 1,
  pageSize: 10
}


const companyData = ( state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMPANY_DATA_LIST : 
      return {
        ...state,
        isLoadingList: true
      }
      break;
    case RECEIVE_COMPANY_DATA_LIST : 
      if (action.data) {
        return {
          ...state,
          companyDataList: action.data.companyDataList,
          totalCompanies: action.data.totalCompanies,
          isLoadingList: false,
        } 
      }
      return state;
    case SET_CURRENT_PAGE_NUMBER: 
      return {
        ...state,
        currentPageNumber: action.currentPageNumber
      }
    break;
    default:
      return state;
  }

} 

const rootReducer = combineReducers({
  companyData
});

export default rootReducer;