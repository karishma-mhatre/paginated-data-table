import { connect } from "react-redux";
import { fetchCompanyDataList } from '../actions';
import CompanyList from '../components/CompanyList';

const mapStateToProps = (state) => ({
  companyList: state.companyData.companyDataList,
  currentPageNumber: state.companyData.currentPageNumber,
  totalCompanies: state.companyData.totalCompanies,
  pageSize: state.companyData.pageSize,
  isLoadingList: state.companyData.isLoadingList
});

export default connect(mapStateToProps)(CompanyList);