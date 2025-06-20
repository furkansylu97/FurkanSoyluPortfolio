import React from "react";
import { Link } from "react-router";
import logo from "../images/logo.svg";

function Header() {
  return (
    <div className="flex justify-around items-center h-28">
      <Link to="/">
        <img className="cursor-pointer w-24 h-24" src={logo} />
      </Link>
      <div>
        <div>Welcome</div>
      </div>
      <div>
        <div>Furkan</div>
        <div>Soylu</div>
      </div>
    </div>
  );
}

export default Header;
