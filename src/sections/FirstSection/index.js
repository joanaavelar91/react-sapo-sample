import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  returnSquareColor,
  resetSquareColor,
} from "../../store/FirstSection/square/thunks";

import FirstSection from "./FirstSection";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      returnSquareColor,
      resetSquareColor,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(FirstSection);
