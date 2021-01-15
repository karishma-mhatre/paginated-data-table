import './App.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import CompanyList from './containers/CompanyListContainer';
import reducer from './reducers/companyDataList.js';
import CompanyListPaginator from './containers/CompanyListPaginatorContainer';
import SearchCompanyList from './containers/CompanyListSearchContainer';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <SearchCompanyList></SearchCompanyList>
        <CompanyList></CompanyList>
        <CompanyListPaginator></CompanyListPaginator>
      </div>
    </Provider>
  );
}

export default App;
