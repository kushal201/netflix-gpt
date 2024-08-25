import React from "react";
import { LOGO } from "../utils/constants";
import { USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/"); // navigates back to home page
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };
  return (
    <div className="flex justify-between z-10 w-full absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="LOGO"></img>
      <div className="flex p-2">
        <img className="m-2 w-12 h-12" src={USER_ICON} alt="user-icon"></img>
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
