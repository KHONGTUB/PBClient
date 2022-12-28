import Record from "../component/Record";
import { connect } from "react-redux";
import { addRecord } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    userid: state.userid,
    record: state.record,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRecord: (record) => dispatch(addRecord(record)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
