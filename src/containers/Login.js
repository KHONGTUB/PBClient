import { connect } from "react-redux";
import Login from "../component/Login";
import { addUserId, removeUserId } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    userid: state.userid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserId: (id) => dispatch(addUserId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
