import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Provider } from "react-redux";

import React, { useState } from "react";

import "./assets/fonts/Roboto.css";

import logo from "./assets/images/logo.png";
import footer from "./assets/images/footer.png";
import burger from "./assets/images/icon-burger-menu.svg";
import "./App.css";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";

function App({ store, history }) {
  const [open, setState] = useState(false);

  const toggleState = () => {
    setState(!open);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <div className="firstContainer">
          <header className="AppHeader">
            <img src={logo} className="AppLogo" alt="logo" />
            <nav>
              <Tabs
                value={0}
                onChange={() => {}}
                className="tabsContainer"
                classes={{ scroller: "scroller	", indicator: "indicator" }}
              >
                <Tab label="Loren" classes={{ selected: "selected	" }} />
                <Tab label="Ipsum" classes={{ selected: "selected	" }} />
                <Tab label="Dolore" classes={{ selected: "selected	" }} />
              </Tabs>
            </nav>
            <div className="mob-wrapper" onClick={toggleState}>
              <img src={burger} alt="Burger Menu" className="burgermenu" />
              <div className={`mobnav ${open ? "display" : ""}`}>
                <a href="#hhh">Loren</a>
                <a href="#hhh">Ipsum</a>
                <a href="#hhh">Dolore</a>
              </div>
            </div>
          </header>
          <section className="firstSection">
            <FirstSection />
          </section>
        </div>
        <div className="secondContainer">
          <section className="secondSection">
            <SecondSection />
          </section>
        </div>
        <div className="thirdContainer">
          <section className="thirdSection">
            <ThirdSection />
          </section>
        </div>
        <footer>
          <img src={footer} className="Appfooter" alt="footer" />
        </footer>
      </div>
    </Provider>
  );
}

export default App;
