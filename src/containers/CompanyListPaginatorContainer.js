import { connect } from "react-redux";
import Paginator from '../components/Paginator';

const mapStateToProps = (state) => ({
  currentPageNumber: state.companyData.currentPageNumber,
  totalCount: state.companyData.totalCompanies,
  pageSize: state.companyData.pageSize,
});

export default connect(mapStateToProps)(Paginator);