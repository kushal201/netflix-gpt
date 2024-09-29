import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { BACKGROUND, USER_ICON } from "../utils/constants";
import { checkName, checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignUpForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // validate email id and password in the form
    let message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    if (!isSignIn) {
      const nameCheck = checkName(name.current.value);
      if (nameCheck) {
        message = nameCheck;
      }
    }
    setErrorMessage(message);
    if (message) return;

    // Sign In and Sign Up Logic below
    if (!isSignIn) {
      // Sign Up Logic
      // creates new user with email and password
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // if Signed up successfully
          const user = userCredential.user;
          // to update user name after user has successfully signed in / signed up
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_ICON,
          })
            .then(() => {
              // Profile updated! and user details are dispatched to the redux store
              // after user is successfully registered, navigate to browse component
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          // If Sign Up Failed
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      // signs in with existing email and password
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // if Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img src={BACKGROUND} alt="bg-img"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="my-5 py-4 font-bold text-3xl text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-2 w-full bg-gray-700 text-white rounded-md"
            type="text"
            placeholder="Name"
          ></input>
        )}
        <input
          ref={email}
          className="p-4 my-2 w-full bg-gray-700 text-white rounded-md"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          className="p-4 my-2 w-full bg-gray-700 text-white rounded-md"
          type="password"
          placeholder="Password"
        ></input>
        <p className="p-2 font-bold text-lg text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className=" w-full bg-red-700 text-white py-3 my-6 rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignUpForm}
          className="cursor-pointer py-4 text-white font-bold"
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now!"
            : "Already Registerd? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
