import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Search, Notifications } from "@material-ui/icons";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__left">
          <img
            onClick={() => history.push("/")}
            className="nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
          <span>Movies</span>
          <span>Series</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="nav__right">
          <Search className="icon" />
          <Notifications className="icon" />
          <img
            onClick={() => history.push("/profile")}
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
