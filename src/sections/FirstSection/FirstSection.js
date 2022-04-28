import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { Button } from "@mui/material";

import logo from "../../assets/images/logo.png";

import "./FirstSection.css";

const FirstSection = ({ returnSquareColor, resetSquareColor }) => {
  const [squareButtonObj, setSquareButtonObj] = useState([
    "colorFirst",
    "colorSecond",
    "colorThird",
  ]);

  useEffect(() => {
    returnSquareColor(squareButtonObj[1]);
    return () => {
      resetSquareColor();
    };
  }, [returnSquareColor, resetSquareColor, squareButtonObj]);

  const rotateButtons = (position) => {
    let changeColor = [...squareButtonObj],
      firstElem,
      lastElem;

    if (position === "right") {
      firstElem = changeColor.shift();
      changeColor.push(firstElem);
    } else {
      lastElem = changeColor.pop();
      changeColor.unshift(lastElem);
    }

    setSquareButtonObj(changeColor);
  };

  return (
    <>
      <div className="geometricContainer">
        <div className="buttonsRotateContainer">
          <Button
            key="leftButton"
            variant="contained"
            className={`leftButton ${squareButtonObj[0]}`}
            onClick={(elem) => rotateButtons("left")}
          />
          <Button
            key="middleButton"
            variant="contained"
            className={`middleButton selected ${squareButtonObj[1]}`}
          />
          <Button
            key="rightButton"
            variant="contained"
            className={`rightButton ${squareButtonObj[2]}`}
            onClick={(elem) => rotateButtons("right")}
          />
        </div>
        <div className={`bodyElemContainer ${squareButtonObj[1]}`}>
          <div className="circOne"></div>
          <div className="triOne"></div>
          <div className="triTwo"></div>
          <div className="recOne"></div>
          <div className="recTwo"></div>
          <div className="circTwo"></div>
        </div>
      </div>
      <img src={logo} className="firstSectionLogo" alt="logo" />
    </>
  );
};

FirstSection.propTypes = {
  returnSquareColor: PropTypes.func.isRequired,
  resetSquareColor: PropTypes.func.isRequired,
};

export default FirstSection;
