import React, { useState } from "react";

import PropTypes from "prop-types";

import { Button, Typography } from "@mui/material";

import sapo from "../../assets/images/sapo.png";

import "./SecondSection.css";

const SecondSection = ({ firstSectionRed }) => {
  const { squareClass } = firstSectionRed;

  const [isCollapse, setCollapseState] = useState(false);

  const collapseText = () => {
    setCollapseState(!isCollapse);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <Typography variant="h1" component="h1" classes={{ h1: "h1" }}>
        Sapo
      </Typography>
      <div className="secondSectionContainer">
        <div className="sapoImgContainer">
          <div className={`circSapo ${squareClass}`}></div>
          <img src={sapo} className="sapoLogo" alt="sapo" />
        </div>
        <article>
          <div className={isCollapse ? "collapseText" : "sapoTextContainer"}>
            <Typography
              className="sapoText"
              variant="h4"
              component="h4"
              classes={{ h4: "h4" }}
            >
              Estamos consigo desde 1995, mas ainda mal começámos a tocar o
              futuro.
            </Typography>
            <Typography
              className="sapoText"
              variant="h4"
              component="h4"
              classes={{ h4: "h4" }}
            >
              Apostamos na credibilidade, na criatividade, na inovação, na
              tecnologia e na proximidade.
            </Typography>
            <Typography
              className="sapoText"
              variant="h4"
              component="h4"
              classes={{ h4: "h4" }}
            >
              Somos o SAPO, vamos tornar a sua vida mais simples, mais
              informada, mais divertida, mais prática, aqui e em todo o mundo.
              Queremos estar na sua vida.
            </Typography>
          </div>
          <Button
            className="collapseTextButton"
            classes={{ text: "text" }}
            onClick={(elem) => collapseText()}
          >
            ...
          </Button>
        </article>
      </div>
      <div className="linksContainer">
        <Button
          variant="contained"
          className="linkLeftButton"
          classes={{ root: "root" }}
          onClick={(elem) =>
            openInNewTab(
              "https://rd3.videos.sapo.pt/bRi3wOIOTyf2cWDtNkpj?jwsource=cl"
            )
          }
        >
          Manifesto
        </Button>
        <Button
          variant="contained"
          className="linkRightButton"
          classes={{ root: "root" }}
          onClick={(elem) =>
            openInNewTab(
              "https://rd3.videos.sapo.pt/niJFYO47fFYMVA638E6a?jwsource=cl"
            )
          }
        >
          O sapo deu o salto
        </Button>
      </div>
    </>
  );
};

SecondSection.propTypes = {
  firstSectionRed: PropTypes.instanceOf(Object).isRequired,
};

export default SecondSection;
