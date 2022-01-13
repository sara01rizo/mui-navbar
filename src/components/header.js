import React from "react";
import { Link } from "@reach/router";
import puente from "../../src/images/puente.jpg";
import "../../src/styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div id="imgPuente" className="puente">
        <Link to="/">
          <puenteImg />
        </Link>
      </div>
      <img src={puente} alt="puente" className="bg_puente" />
    </header>
  );
};

export default Header;
