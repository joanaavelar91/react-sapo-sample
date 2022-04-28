import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { Button, Typography, TextField } from "@mui/material";

import logo from "../../assets/images/logo.png";

import "./ThirdSection.css";

const formValuesInit = {
  x: {
    value: "",
    invalid: false,
  },
  y: {
    value: "",
    invalid: false,
  },
  d: {
    value: "",
    invalid: false,
  },
  jumps: {
    value: "",
    invalid: false,
  },
};

const formErrorMessages = {
  x: "X tem de ser um inteiro e superior ou igual a Y! Quando o rectangulo verde está seleccionado X = 3 and quando o azul X <=7.",
  y: "Y tem de ser um inteiro e superior ou igual a X!",
  d: "D tem de ser um inteiro!",
};

const ThirdSection = ({ firstSectionRed }) => {
  const { squareClass } = firstSectionRed;

  const [formValues, setFormValues] = useState(formValuesInit);

  useEffect(() => {
    setFormValues(formValuesInit);
  }, [squareClass]);

  const isInvalidForm = () => {
    return (
      Object.entries(formValues).filter(
        (obj) => obj[1].value === "" && obj[0] !== "jumps"
      ).length > 0 ||
      Object.values(formValues).reduce(
        (prev, obj) => prev || obj.invalid,
        false
      )
    );
  };

  const validateNegValues = (value) => {
    var isNeg = false;
    if (value < 0) {
      isNeg = true;
    }

    return isNeg;
  };

  const handleXChange = (elem) => {
    const value = elem.target.value !== "" ? Number(elem.target.value) : "";

    let xUpdated = { x: { value: value, invalid: false } };

    if (
      validateNegValues(value) ||
      value > formValues.y.value ||
      (squareClass === "colorSecond" && value !== 3) ||
      (squareClass === "colorThird" && value > 7)
    ) {
      xUpdated = { x: { value: value, invalid: true } };
    } else if (value < formValues.y.value) {
      xUpdated = {
        ...xUpdated,
        y: { value: formValues.y.value, invalid: false },
      };
    }

    setFormValues({ ...formValues, ...xUpdated });
  };

  const handleYChange = (elem) => {
    const value = elem.target.value !== "" ? Number(elem.target.value) : "";

    let YUpdated = { y: { value: value, invalid: false } };

    if (validateNegValues(value) || value < formValues.x.value) {
      YUpdated = { y: { value: value, invalid: true } };
    } else if (
      value >= formValues.x.value &&
      (squareClass === "colorFirst" ||
        (squareClass === "colorSecond" && formValues.x.value === 3) ||
        (squareClass === "colorThird" && formValues.x.value <= 7))
    ) {
      YUpdated = {
        ...YUpdated,
        x: { value: formValues.x.value, invalid: false },
      };
    }

    setFormValues({ ...formValues, ...YUpdated });
  };

  const handleDChange = (elem) => {
    const value = elem.target.value !== "" ? Number(elem.target.value) : "";

    let DUpdated = { d: { value: value, invalid: false } };

    if (validateNegValues(value)) {
      DUpdated = { d: { value: value, invalid: true } };
    }

    setFormValues({ ...formValues, ...DUpdated });
  };

  const handleSubmit = () => {
    const { x, y, d } = formValues;

    const jumps = Math.ceil((y.value - x.value) / d.value);

    setFormValues({
      ...formValues,
      ...{ jumps: { value: jumps, invalid: false } },
    });
  };

  return (
    <>
      <Typography
        variant="h1"
        component="h2"
        className="thirdSectionTitle"
        classes={{ h1: "h1" }}
      >
        {`O sapo deu ${
          formValues.jumps.value === "" ? 0 : formValues.jumps.value
        } ${formValues.jumps.value === 1 ? "salto" : "saltos"}`}
      </Typography>
      <div className="formSapoContainer">
        <div className="formContainer">
          <span className="inputLabel">X</span>
          <TextField
            {...(formValues.x.invalid && { error: true })}
            id="standard-error-x-text"
            type="number"
            value={formValues.x.value}
            helperText={formValues.x.invalid ? formErrorMessages.x : ""}
            variant="standard"
            onChange={handleXChange}
          />
          <span className="inputLabel">Y</span>
          <TextField
            {...(formValues.y.invalid && { error: true })}
            id="standard-error-y-text"
            type="number"
            classes={{ focused: "focused" }}
            value={formValues.y.value}
            helperText={formValues.y.invalid ? formErrorMessages.y : ""}
            variant="standard"
            onChange={handleYChange}
          />
          <span className="inputLabel">D</span>
          <TextField
            {...(formValues.d.invalid && { error: true })}
            id="standard-error-d-text"
            type="number"
            value={formValues.d.value}
            helperText={formValues.d.invalid ? formErrorMessages.d : ""}
            variant="standard"
            onChange={handleDChange}
          />
          <Button
            {...(isInvalidForm() && { disabled: true })}
            variant="contained"
            onClick={handleSubmit}
            className="submitButton"
            classes={{ root: "root" }}
          >
            Dá o salto
          </Button>
        </div>
        <div className="sapoLine">
          <div className={`diagonalLine ${squareClass}`} />
          <img src={logo} className="thirdSectionLogo" alt="logo" />
        </div>
      </div>
    </>
  );
};

ThirdSection.propTypes = {
  firstSectionRed: PropTypes.instanceOf(Object).isRequired,
};

export default ThirdSection;
