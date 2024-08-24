import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="z-10 absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="LOGO"></img>
      <div>
      </div>
    </div>
  );
};

export default Header;
