import React, { useEffect } from 'react';
import { fetchCompanyDataList } from '../../actions';
import './company-list.css';

function CompanyList({ companyList, currentPageNumber, totalCompanies, pageSize, dispatch }) {
  console.log(totalCompanies, pageSize, currentPageNumber);
  useEffect(() => {
    console.log("cpn", currentPageNumber);
    dispatch(fetchCompanyDataList(currentPageNumber, pageSize));
  }, [currentPageNumber]);
  console.log(companyList, currentPageNumber);
  return companyList.length > 0 ? <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Type</th>
      <th>Company</th>
    </tr>
    {
      companyList.map(item => {
        return <tr>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.company}</td>
        </tr>
      })
    }
  </table> : <div>No results found!</div>
}

export default CompanyList;