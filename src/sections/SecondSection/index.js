import { connect } from "react-redux";

import SecondSection from "./SecondSection";

const mapStateToProps = ({ firstSectionRed }) => ({ firstSectionRed });

export default connect(mapStateToProps, null)(SecondSection);
