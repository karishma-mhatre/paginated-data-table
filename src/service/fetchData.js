import data from '../mock-data/companyDataList';
let currentResult = data;

//Backend fetch data API mock
export function fetchData(pageNumber, pageSize) {
  return new Promise((resolve, reject) => {
    let startIndex = (pageNumber - 1) * pageSize;
    console.log(startIndex);
    let list = currentResult.slice(startIndex, startIndex + pageSize);
    console.log("res", list);

    resolve({ companyDataList: list, totalCompanies: currentResult.length });
  });
}

//Backend search data API mock
export function searchData(searchString, pageSize) {
  return new Promise((resolve, reject) => {
    if (!searchString) {
      currentResult = data
      let list = currentResult.slice(0, 0 + pageSize);
      console.log("res", list);
      resolve({ companyDataList: currentResult, totalCompanies: currentResult.length });
    }
    currentResult = currentResult.filter(element => {
      return element.company.toLocaleLowerCase().includes(searchString) || element.type.includes(searchString)
    });
    let list = currentResult.slice(0, 0 + pageSize);
    resolve({ companyDataList: list, totalCompanies: currentResult.length });
  });
}