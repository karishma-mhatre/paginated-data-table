import React, { useState } from 'react';
import './search.css';

//Search component can be reused with any kind of search component. For e.g created a CompanyListSearchContainer
function Search ({searchFunction, pageSize, dispatch}) {
  console.log(searchFunction, pageSize);
  const [searchString, setSearchString] = useState("");
  const handleChange = (e) => {
    dispatch(searchFunction(e.target.value, pageSize));
  }

  const search = () => {
    
  }

  return <div>
   <input type="text" onKeyUp={handleChange} placeholder="Search by typing names..."/>
  </div>
}

export default Search;