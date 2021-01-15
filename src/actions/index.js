import { fetchData, searchData } from '../service/fetchData.js'

export const REQUEST_COMPANY_DATA_LIST = "REQUEST_COMPANY_DATA_LIST";
export const RECEIVE_COMPANY_DATA_LIST = "RECEIVE_COMPANY_DATA_LIST";
export const SET_CURRENT_PAGE_NUMBER = "SET_CURRENT_PAGE_NUMBER";
export const REQUEST_SEARCH_DATA = "REQUEST_SEARCH_DATA";
export const RECEIVE_SEARCH_DATA = "RECEIVE_SEARCH_DATA";

export const requestCompanyDataList = () => ({type: REQUEST_COMPANY_DATA_LIST});
export const receiveCompanyDataList = (data) => ({type: RECEIVE_COMPANY_DATA_LIST, data})

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: SET_CURRENT_PAGE_NUMBER,
  currentPageNumber
});


export const fetchCompanyDataList = (pageNumber, pageSize) => {
  return async function (dispatch) {
    dispatch(requestCompanyDataList());
    let data = await fetchData(pageNumber, pageSize);
    console.log(data)
    dispatch(receiveCompanyDataList(data));
  }
}

export const fetchCompanySearchedResults = (searchString, pageSize) => {
  return async function (dispatch) {
    dispatch(requestCompanyDataList());
    let data = await searchData(searchString, pageSize);
    console.log(data)
    dispatch(receiveCompanyDataList(data));
  }
}

