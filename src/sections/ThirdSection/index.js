import { connect } from "react-redux";

import ThirdSection from "./ThirdSection";

const mapStateToProps = ({ firstSectionRed }) => ({ firstSectionRed });

export default connect(mapStateToProps, null)(ThirdSection);
