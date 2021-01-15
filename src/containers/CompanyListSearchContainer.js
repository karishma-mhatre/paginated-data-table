import { connect } from "react-redux";
import Search from '../components/Search';
import { fetchCompanySearchedResults } from '../actions';

const mapStateToProps = (state) => ({
  pageSize: state.companyData.pageSize,
  searchFunction: fetchCompanySearchedResults
});

export default connect(mapStateToProps)(Search);