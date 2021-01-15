import React from 'react';
import { setCurrentPageNumber } from '../../actions';
import './paginator.css'

//Paginator component can be reused with any kind of list. For e.g created a CompanyListPaginator
function Paginator ({currentPageNumber, totalCount, pageSize, dispatch}) {
  console.log(totalCount, pageSize, currentPageNumber);
  let pageCount = totalCount / pageSize;
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const navigateToPage = (pageNumber) => {
    dispatch(setCurrentPageNumber(pageNumber));
  }
  return totalCount > 0 ? <div className="paginator">
    <button onClick={(event) => navigateToPage(currentPageNumber - 1)} type="button">Back</button>
    {
      pageNumbers.map(pageNumber => {
        return <button key={pageNumber} className={pageNumber === currentPageNumber ? "active-page": ""} 
        onClick={(event) => navigateToPage(pageNumber)} type="button">{pageNumber}</button>
      })
    }
    <button onClick={(event) => navigateToPage(currentPageNumber + 1)} type="button">Forward</button>
  </div> : null;
}

export default Paginator;